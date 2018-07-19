import {Component,Inject} from '@nestjs/common';
import {ISession,ISessionService} from './Interfaces';
import {SessionEntity} from './session.entity';
import { Repository,getConnection } from 'typeorm';
import { QuestionnaireAnswerEntity } from '../QuestionnaireAnswer/questionnaireAnswer.entity';

@Component()
export class SessionService implements ISessionService{
  constructor(
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
    return await this.sessionRepository.find({where: {userId: id}});
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
  public async deleteSession(sessionId:number):Promise<string>{
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
      return 'delete fail';
    }else{
      return 'delete success';
    }
  }

  public async getSessionWithQuestionnaireAnswer(sessionId:number){
    const sessionWithQuestionnaireAnswer = await getConnection().getRepository(SessionEntity)
      .createQueryBuilder("session").leftJoinAndSelect("session.questionnaireAnswer","questionnaireAnswer")
      .where("session.id = :id",{id:sessionId}).getOne();
    return sessionWithQuestionnaireAnswer;
  }

  public async createSession(session: ISession): Promise<SessionEntity> {
    return await this.sessionRepository.save(session);
  }
}