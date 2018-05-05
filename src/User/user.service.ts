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

}
