import { Component ,Inject} from "@nestjs/common";
import {getConnection, Repository} from 'typeorm';
import { IDomain,IDomainService} from './Interfaces';
import { DomainEntity} from './domain.entity';
import {ExceptionHandler} from '@nestjs/core/errors/exception-handler';
import {SessionEntity} from '../../Session/session.entity';

@Component()
export class DomainService implements IDomainService{
  constructor(
    @Inject('DomainRepository') private domainRepository:Repository<DomainEntity>
  ){}

  public async getAllDomain():Promise<Array<DomainEntity>>{
    return await this.domainRepository.find();
  }

  public async getDomainById(domainId:number):Promise<DomainEntity|null>{
    return await this.domainRepository.findOne({where:{id:domainId}});
  }

  public async getDomainCompletion(userId: number): Promise<any> {
      const answers = await getConnection().getRepository(SessionEntity).createQueryBuilder('session')
          .where('session.userId := userId', {userId: userId}).getMany();
      return answers;
  }

  public async addDomain(domain:IDomain):Promise<DomainEntity>{
    return await this.domainRepository.save(domain);
  }

  public async updateDomain(domainId:number,newDomain:IDomain):Promise<DomainEntity|null>{
    const selectedDomain = await this.domainRepository.findOne({where:{id:domainId}});
    if(selectedDomain){
      await this.domainRepository.update(domainId,newDomain);
      return await this.domainRepository.findOne({where:{id:domainId}});
    }else{
      return null;
    }
  }

  public async deleteDomain(domainId:number) {
    const selectedDomain = await this.domainRepository.findOne({where:{id:domainId}});
    if(selectedDomain){
      await this.domainRepository.delete(domainId);
      return;
    }else{
      throw ExceptionHandler;
    }
  }
}