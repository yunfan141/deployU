import {Component,Inject} from '@nestjs/common';
import {IUserService,IUser} from './Interfaces';
import {UserEntity} from './user.entity';
import { Repository } from 'typeorm';

@Component()
export class UserService implements IUserService{
  constructor(
    @Inject('UserRepository') private readonly userRepository: Repository<UserEntity>
  ){}

  public async getAllUser():Promise<Array<UserEntity>>{
    return await this.userRepository.find();
  }

  public async getUserById(userId:number):Promise<UserEntity|null>{
    return await this.userRepository.findOne({where:{id:userId}});
  }

  public async addUser(user:IUser):Promise<UserEntity>{
    return await this.userRepository.save(user);
  }

  public async updateUser(userId:number,newUser:IUser):Promise<UserEntity|null>{
     const selectedUser = await this.userRepository.findOne({where:{id:userId}});
     if(selectedUser){
       await this.userRepository.update(userId,newUser);
       return await this.userRepository.findOne({where:{id:userId}});
     }else{
       return null;
     }
  }

  public async deleteUser(userId:number):Promise<string>{
    const selectedUser = await this.userRepository.findOne({where:{id:userId}});
    if(selectedUser){
      await this.userRepository.delete(userId);
      return 'delete success';
    }else{
      return 'delete fail';
    }
  }
  //feature for get security question
  public async getUserSecurityQuestion(userId:number):Promise<Object|string>{
    const selectedUser = await this.userRepository.findOne({where:{id:userId}});
    if(selectedUser){
      const securityQuestions = selectedUser.security.map((item) => {
        return {question:item.q};
      })
      return securityQuestions;
    }else{
      return 'User does not exist';
    }
  }
  //feature for the correctness of security question
  public async checkUserSecurityQuestion(userId:number,answers:Array<any>):Promise<boolean>{
    let result:boolean = true;
    const selectedUser = await this.userRepository.findOne({where:{id:userId}});
    for(let i = 0; i < answers.length;i++){
      if(answers[i].q !== selectedUser.security[i].q){
        result = false;
      }
    }
    return await result;
  }
  //login in check, pending
  public async checkUserLogin(logInfo:any):Promise<boolean>{
    const selectedUser = await this.userRepository.findOne({where:{userName:logInfo.userName,password:logInfo.password,userType:logInfo.userType}});
    if(selectedUser){
      return true;
    }else{
      return false;
    }
  }
  //check the user name exist or not when log in
  public async checkUserExisting(UserName:any):Promise<boolean>{
    const selectedUser = await this.userRepository.findOne({where:{userName:UserName.username}});
    if(selectedUser){
      return false;
    }else{
      return true;
    }
  }

}
