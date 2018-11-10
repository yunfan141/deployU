import {Component,Inject} from '@nestjs/common';
import {ISession,ISessionService} from './Interfaces';
import {SessionEntity} from './session.entity';
import { Repository,getConnection } from 'typeorm';
import { QuestionnaireAnswerEntity } from '../QuestionnaireAnswer/questionnaireAnswer.entity';
import {QuestionnaireEntity} from '../Questionnaire/questionnaire.entity';
import {UserEntity} from '../User/user.entity';
import {transformException} from '@nestjs/common/interceptors/multer/multer.utils';

@Component()
export class SessionService implements ISessionService{
  constructor(
    @Inject('UserRepository') private readonly userRepository:Repository<UserEntity>,
    @Inject('SessionRepository') private readonly sessionRepository:Repository<SessionEntity>,
    @Inject('QuestionnaireAnswerRepository') private readonly questionnaireAnswerRepository: Repository<QuestionnaireAnswerEntity>
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
    await questionnaireAnswer.forEach( (anwserAndQuestionItem) => {
        const index = domainsMap.get(anwserAndQuestionItem.domain);
        scoreList[index] += anwserAndQuestionItem.answer.extent;
    })
    console.log(scoreList);
    return scoreList;  
  }

  public async getAllRoleScore(){
    console.log('test0');
    let roleScore = {"Student": [0,0,0,0,0,0,0,0], "Faculty": [0,0,0,0,0,0,0,0], "Staff": [0,0,0,0,0,0,0,0]};
    console.log('test1');
    const allSession = await this.getAllSession();
    console.log('test');
    const allSessionIdAndUserId =  await allSession.map(item => {
      return {"sessionid": item.id, "userId" : item.userId}
    });
    // await allSessionIdAndUserId.forEach( async item =>{
    //   const scoreList =  await this.getSessionScore(item.sessionid);
    //   const user = await this.userRepository.findOne({where:{id:item.userId}});
    //   const role = user.userType;
    //   console.log("vvvvvvvvvvvvvvvvv");
    //   console.log(role);
    //   console.log(scoreList);
    //   for(let i = 0; i < 7; i++){
    //     roleScore[role][i] += scoreList[i];
    //     console.log(roleScore);
    //     roleScore[role][7] += scoreList[i];
    //   }
    // })
    for(let i = 0; i < allSessionIdAndUserId.length; i++){
      const item = allSessionIdAndUserId[i];
      const scoreList =  await this.getSessionScore(item.sessionid);
      const user = await this.userRepository.findOne({where:{id:item.userId}});
      const role = user.userType;
      for(let i = 0; i < 7; i++){
        roleScore[role][i] += scoreList[i];
        console.log(roleScore);
        roleScore[role][7] += scoreList[i];
      }
    }
    return roleScore;
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