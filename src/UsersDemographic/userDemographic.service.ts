import { Component, Inject } from '@nestjs/common';
import {IUserDemographicService,IUserDemographic} from './Interfaces/';
import {UserDemographicEntity} from './userDemographic.entity';
import {Repository} from 'typeorm';

@Component()
export class UserDemographicService implements IUserDemographicService{
  constructor(
    @Inject('UserDemographicRepository') private readonly userDemographicRepository:Repository<UserDemographicEntity>
  ){}

  public async getAllUserDemographics():Promise<Array<UserDemographicEntity>>{
    return await this.userDemographicRepository.find();
  }
  public async getUserDemographicById(userDemographicId:number):Promise<UserDemographicEntity|null>{
    return await this.userDemographicRepository.findOne({where:{id:userDemographicId}});
  }
  public async addUserDemographic(userDemographic:IUserDemographic):Promise<UserDemographicEntity>{
    return await this.userDemographicRepository.save(userDemographic);
  }
  public async updateUserDemographic(userDemographicId:number,newUserDemographic:IUserDemographic):Promise<UserDemographicEntity|null>{
    const selectedUserDemographic = await this.userDemographicRepository.findOne({where:{id:userDemographicId}});
    if(selectedUserDemographic){
      await this.userDemographicRepository.update(userDemographicId,newUserDemographic);
      return await this.userDemographicRepository.findOne({where:{id:userDemographicId}});
    }else{
      return null;
    }
  }
  public async deleteUserDemographic(userDemographicId:number):Promise<string>{
    const selectedUserDemographic = await this.userDemographicRepository.findOne({where:{id:userDemographicId}});
    if(selectedUserDemographic){
      await this.userDemographicRepository.delete(userDemographicId);
      return 'delete success';
    }else{
      return 'delete fail';
    }
  }
}