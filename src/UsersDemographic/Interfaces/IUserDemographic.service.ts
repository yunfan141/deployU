import {IUserDemographic} from './IUserDemographic';
import {UserDemographicEntity} from '../userDemographic.entity';

export interface IUserDemographicService {
  getAllUserDemographics():Promise<Array<UserDemographicEntity>>;
  getUserDemographicById(id:number):Promise<UserDemographicEntity|null>;
  addUserDemographic(userDemographic:IUserDemographic):Promise<UserDemographicEntity>;
  updateUserDemographic(id:number,newUserDemographic:IUserDemographic):Promise<UserDemographicEntity|null>;
  deleteUserDemographic(id:number):Promise<string>;
}