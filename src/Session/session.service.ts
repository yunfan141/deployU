import {Component,Inject} from '@nestjs/common';
import {ISession,ISessionService} from './Interfaces';
import {SessionEntity} from './session.entity';
import { Repository } from 'typeorm';

@Component()
export class SessionService implements ISessionService{
  constructor(
    @Inject('SessionRepository') private readonly sessionRepository:Repository<SessionEntity>
  ){}

  public async getAllSession():Promise<Array<SessionEntity>>{
    return await this.sessionRepository.find();
  }
  public async getSessionById(sessionId:number):Promise<SessionEntity|null>{
    return await this.sessionRepository.findOne({where:{id:sessionId}});
  }
  public async addSession(session:ISession):Promise<SessionEntity>{
    return await this.sessionRepository.save(session);
  }
  public async updateSession(sessionId:number,newSession:ISession):Promise<SessionEntity|null>{
    const selectedSession = await this.sessionRepository.findOne({where:{id:sessionId}});
    if(selectedSession){
      await this.sessionRepository.update(sessionId,newSession);
      return await this.sessionRepository.findOne({where:{id:sessionId}});
    }else{
      return null;
    }
  }
  public async deleteSession(sessionId:number):Promise<string>{
    const selectedSession = await this.sessionRepository.findOne({where:{id:sessionId}});
    if(selectedSession){
      await this.sessionRepository.delete(sessionId);
      return 'delete success';
    }else{
      return 'delete fail';
    }
  }
}