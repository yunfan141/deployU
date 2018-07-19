import {ISession} from './ISession';
import {SessionEntity} from '../session.entity';

export interface ISessionService {
  getAllSession():Promise<Array<SessionEntity>>;
  getSessionById(sessionId:number):Promise<SessionEntity|null>;
  addSession(sessionId: number, session:ISession):Promise<SessionEntity>;
  updateSession(sessionId:number,session:ISession):Promise<SessionEntity|null>;
  deleteSession(sessionId:number);
}