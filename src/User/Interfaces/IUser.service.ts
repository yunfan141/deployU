import {IUser} from './IUser';
import {UserEntity} from '../user.entity';

export interface IUserService {
  getAllUser():Promise<Array<UserEntity>>;
  getUserById(id:number):Promise<UserEntity|null>;
  addUser(user:IUser):Promise<UserEntity>;
  updateUser(id:number,newUser:IUser):Promise<UserEntity|null>;
  deleteUser(id:number):Promise<string>;
  getUserSecurityQuestion(id:number):Promise<Object|string>;
  checkUserSecurityQuestion(id:number,questions:Array<object>):Promise<boolean>;
  // checkUserLogin(logInfo:any):Promise<boolean>;
  // checkUserExisting(userName:string):Promise<boolean>;
    checkLoginStatus(logInfo: any): Promise<any>;

}