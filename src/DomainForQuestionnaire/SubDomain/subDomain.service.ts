import {Component,Inject} from '@nestjs/common';
import {Repository} from 'typeorm';
import {ISubDomain,ISubDomainService} from './Interfaces';
import {SubDomainEntity} from './subDomain.entity';

@Component()
export class SubDomainService implements ISubDomainService{
  constructor(
    @Inject('SubDomainRepository') private readonly subDomainRepository:Repository<SubDomainEntity>
  ){}

  public async getAllSubDomain():Promise<Array<SubDomainEntity>>{
    return await this.subDomainRepository.find();
  }
  public async getSubDomainById(subDomainId:number):Promise<SubDomainEntity|null>{
    return await this.subDomainRepository.findOne({where:{id:subDomainId}})
  }
  public async addSubDomain(subDomain:ISubDomain):Promise<SubDomainEntity>{
    return await this.subDomainRepository.save(subDomain);
  }
  public async updateSubDomain(subDomainId:number,newSubDomain:ISubDomain):Promise<SubDomainEntity|null>{
    const selectedSubDomain = await this.subDomainRepository.findOne({where:{id:subDomainId}});
    if(selectedSubDomain){
      await this.subDomainRepository.update(subDomainId,newSubDomain);
      return await this.subDomainRepository.findOne({where:{id:subDomainId}});
    }else{
      null;
    }
  }
  public async deleteSubDomain(subDomainId:number):Promise<string>{
    const selectedSubDomain = await this.subDomainRepository.findOne({where:{id:subDomainId}});
    if(selectedSubDomain){
      await this.subDomainRepository.delete(subDomainId);
      return 'delete success';
    }else{
      return 'delete fail';
    }
  }
}