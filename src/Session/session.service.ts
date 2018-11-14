import {Component,Inject} from '@nestjs/common';
import {ISession,ISessionService} from './Interfaces';
import {SessionEntity} from './session.entity';
import { Repository,getConnection } from 'typeorm';
import { QuestionnaireAnswerEntity } from '../QuestionnaireAnswer/questionnaireAnswer.entity';
import {QuestionnaireEntity} from '../Questionnaire/questionnaire.entity';
import {UserEntity} from '../User/user.entity';
import {DomainEntity} from '../DomainForQuestionnaire/Domain/domain.entity'
//import {QuestionnaireService} from '../Questionnaire/questionnaire.service';
import {transformException} from '@nestjs/common/interceptors/multer/multer.utils';

@Component()
export class SessionService implements ISessionService{
  constructor(
    @Inject('UserRepository') private readonly userRepository:Repository<UserEntity>,
    @Inject('SessionRepository') private readonly sessionRepository:Repository<SessionEntity>,
    @Inject('QuestionnaireAnswerRepository') private readonly questionnaireAnswerRepository: Repository<QuestionnaireAnswerEntity>,
    //private questionnaireService : QuestionnaireService,
  ){}

  public async getAllSession():Promise<Array<SessionEntity>>{
    return await this.sessionRepository.find();
  }
  public async getSessionById(sessionId:number):Promise<SessionEntity|null>{
    return await this.sessionRepository.findOne({where:{id:sessionId}});
  }

  public async getSessionByUserId(id: number): Promise<Array<SessionEntity>> {
    return await this.sessionRepository.find({where: {userId: id}, order: {id: "DESC"}});
  }

  public async addSession(sessionId: number, session: ISession): Promise<SessionEntity> {
      const selectedSession = await this.sessionRepository.findOne({where:{id: sessionId}});
      console.log(selectedSession);
      for (let answer of session.questionnaireAnswer) {
          const selectedAnswer = await this.questionnaireAnswerRepository.save(answer);
          await getConnection().createQueryBuilder().relation(QuestionnaireAnswerEntity, "session")
              .of(selectedAnswer.id).set(selectedSession.id);
      }
      return await this.sessionRepository.findOne({where:{id:sessionId}});
  }
  // public async addSession(sessionId: number, session:ISession):Promise<SessionEntity>{
  //   const selectedSession = await this.sessionRepository.save(session);
  //   for(let answer of await session.questionnaireAnswer){
  //     const selectedAnswer = await this.questionnaireAnswerRepository.save(answer);
  //     await getConnection().createQueryBuilder().relation(QuestionnaireAnswerEntity,"session")
  //       .of(selectedAnswer.id).set(selectedSession.id);
  //   }
  //   return await this.sessionRepository.findOne({where:{id:selectedSession.id}});
  //
  // }
  public async updateSession(sessionId:number,newSession:ISession):Promise<SessionEntity|null>{
    const selectedSession = await this.sessionRepository.findOne({where:{id:sessionId}});
    if(selectedSession){
      await this.sessionRepository.update(sessionId,newSession);
      const requiredSession = await getConnection().getRepository(SessionEntity).createQueryBuilder("session")
        .leftJoinAndSelect("session.questionnaireAnswer","questionnaireAnswer").where("session.id = :id",{id:sessionId})
        .getOne();
      for(let i = 0;i< await requiredSession.questionnaireAnswer.length;i++){
        await getConnection().createQueryBuilder().update(QuestionnaireAnswerEntity)
          .set(newSession.questionnaireAnswer[i]).where("id = :id",{id:requiredSession.questionnaireAnswer[i].id})
          .execute()
      }
      return await this.sessionRepository.findOne({where:{id:sessionId}});
    }else{
      return null;
    }
  }
  public async deleteSession(sessionId:number) {
    const selectedSession = await getConnection().getRepository(SessionEntity)
      .createQueryBuilder("session").leftJoinAndSelect("session.questionnaireAnswer","questionnaireAnswer")
      .where("session.id = :id",{id:sessionId})
      .getOne();
    for(let answer of await selectedSession.questionnaireAnswer){
      await getConnection().createQueryBuilder().relation(QuestionnaireAnswerEntity,"session")
        .of(answer.id).set(null);
    }
    await getConnection().createQueryBuilder().delete()
      .from(SessionEntity).where("id = :id", { id: sessionId})
      .execute();
    const deletedSession = await this.sessionRepository.findOne({where:{id:sessionId}});
    if(deletedSession){
      return;
    }else{
      return;
    }
  }

  public async getSessionWithQuestionnaireAnswer(sessionId:number){
    const sessionWithQuestionnaireAnswer = await getConnection().getRepository(SessionEntity)
      .createQueryBuilder("session").leftJoinAndSelect("session.questionnaireAnswer","questionnaireAnswer")
      .where("session.id = :id",{id:sessionId}).getOne();
    return sessionWithQuestionnaireAnswer;
  }

  public async getSessionScore(sessionId:number): Promise<Array<number>>{
    const scoreList = [0,0,0,0,0,0,0];
    const sessionWithQuestionnaireAnswer = await this.getSessionWithQuestionnaireAnswer(sessionId);
    const questionnaireAnswer = sessionWithQuestionnaireAnswer.questionnaireAnswer;
    const domainsMap = new Map([
      ["Physical", 0],
      ["Emotional", 1],
      ["Financial", 2],
      ["Social", 3],
      ["Spiritual", 4],
      ["Occupational", 5],
      ["Intellectual", 6]
    ])
    const domainScoreReg = [0,0,0,0,0,0,0];
    for(let i = 1; i <= 7; i++){
      const selectedDomain = await getConnection().getRepository(DomainEntity)
      .createQueryBuilder("domain").where("domain.id = :id",{id:i}).getOne();
      const selectedQuestionnaires = await getConnection().getRepository(QuestionnaireEntity)
      .createQueryBuilder("questionnaire").where("questionnaire.domain = :domain",{domain:selectedDomain.domain})
      .getMany();
      await selectedQuestionnaires.forEach( value => {
        if(value != undefined || value != null){
          domainScoreReg[i - 1] += value.ansOptions.length;
        }
      })
    }
    await questionnaireAnswer.forEach( (anwserAndQuestionItem) => {
        const index = domainsMap.get(anwserAndQuestionItem.domain);
        scoreList[index] += anwserAndQuestionItem.answer.extent;
    })
    console.log(scoreList);
    for(let i = 0; i < 7; i++){
      if(domainScoreReg[i] != 0){
        scoreList[i] =  Math.floor(scoreList[i] / domainScoreReg[i] * 100 )
      }
    }
    console.log(scoreList);
    return scoreList;  
  }

  public async getAllRoleScore(){
    let roleScore = {"Student": [0,0,0,0,0,0,0,0], "Faculty": [0,0,0,0,0,0,0,0], "Staff": [0,0,0,0,0,0,0,0]};
    const allSession = await this.getAllSession();
    const allSessionIdAndUserId =  await allSession.map(item => {
      return {"sessionid": item.id, "userId" : item.userId}
    });
    const numOfRole = {"Student": 0, "Faculty": 0, "Staff": 0};
    for(let i = 0; i < allSessionIdAndUserId.length; i++){
      const item = allSessionIdAndUserId[i];
      const scoreList =  await this.getSessionScore(item.sessionid);
      const user = await this.userRepository.findOne({where:{id:item.userId}});
      const role = user.userType;
      numOfRole[role] ++;
      for(let i = 0; i < 7; i++){
        roleScore[role][i] += scoreList[i];
      }
    }
    const RoleList = ["Student", "Faculty", "Staff"]
    for(let i = 0; i < 3; i++){
      let role = RoleList[i];
      if(numOfRole[role] != 0){
        for(let j = 0; j< 7; j++){
          roleScore[role][j] = Math.floor(roleScore[role][j] / numOfRole[role]);
          roleScore[role][7] += Math.floor(roleScore[role][j] / 7 );
        }
      }
    }
    return roleScore;
  }
  public async getAllRoleScoreByMonth(month : number){
    let roleScore = {"Student": [0,0,0,0,0,0,0,0], "Faculty": [0,0,0,0,0,0,0,0], "Staff": [0,0,0,0,0,0,0,0]};
    const allSession = await this.getAllSession();
    const allSessionIdAndUserId =  [];
    await allSession.forEach(item => {
      const date = new Date(item.createDate);
      const themonth = date.getMonth();
      if(themonth == month){
        allSessionIdAndUserId.push( {"sessionid": item.id, "userId" : item.userId});
      }
    });
    const numOfRole = {"Student": 0, "Faculty": 0, "Staff": 0};
    for(let i = 0; i < allSessionIdAndUserId.length; i++){
      const item = allSessionIdAndUserId[i];
      const scoreList =  await this.getSessionScore(item.sessionid);
      const user = await this.userRepository.findOne({where:{id:item.userId}});
      const role = user.userType;
      numOfRole[role] ++;
      for(let i = 0; i < 7; i++){
        roleScore[role][i] += scoreList[i];
      }
    }
    const RoleList = ["Student", "Faculty", "Staff"]
    for(let i = 0; i < 3; i++){
      let role = RoleList[i];
      if(numOfRole[role] != 0){
        for(let j = 0; j< 7; j++){
          roleScore[role][j] = Math.floor(roleScore[role][j] / numOfRole[role]);
          roleScore[role][7] += Math.floor(roleScore[role][j] / 7 );
        }
      }
    }
    const overallRoleScore = {"Student": roleScore.Student[7], "Faculty": roleScore.Faculty[7], "Staff": roleScore.Staff[7]}
    console.log(overallRoleScore);
    return overallRoleScore;
  }

  public async createSession(session: ISession): Promise<SessionEntity> {
    return await this.sessionRepository.save(session);
  }

  public async getQuestionAndAnswerBySessionId(sessionId:number):Promise<Array<object>>{
      // let solution:Array<object> = [];
      const selectedAnswers = await getConnection().getRepository(QuestionnaireAnswerEntity).createQueryBuilder("answer")
          .leftJoinAndSelect("answer.session","session")
          .where("session.id = :id",{id:sessionId})
          .getMany();
      return await Promise.all(selectedAnswers.map(async (answer) => {
          const selectedQuestionnaire =  await getConnection().getRepository(QuestionnaireEntity).createQueryBuilder("questionnaire")
              .where("questionnaire.id = :id", {id: answer.questionId})
              .getOne();
          return {answer:answer,questionnaire:selectedQuestionnaire };
      }));
  }
}