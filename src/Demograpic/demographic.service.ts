import {Component,Inject} from '@nestjs/common';
import {IDemographicService,IDemographic} from './Interfaces/index';
import {DemographicEntity} from './demographic.entity';
import { Repository } from 'typeorm';

@Component()
export class DemographicService implements IDemographicService{
  constructor(
    @Inject('DemographicRepository') private readonly demographicRepository: Repository<DemographicEntity>
  ){}

  public async getAllDemographic():Promise<Array<DemographicEntity>>{
    return await this.demographicRepository.find();
  }
  public async getDemographicById(id:number):Promise<DemographicEntity|null>{
    return await this.demographicRepository.findOne({where:{id:id}});
  }
  public async addDemographic(demographic:IDemographic):Promise<DemographicEntity>{
    return await this.demographicRepository.save(demographic);
  }
  public async updateDemographic(demographicId:number,newDemographic:IDemographic):Promise<DemographicEntity|null>{
    const selectedDemographic = await this.demographicRepository.findOne({where:{id:demographicId}});
    if(selectedDemographic){
      await this.demographicRepository.update(demographicId,newDemographic);
      return await this.demographicRepository.findOne({where:{id:demographicId}});
    }else{
      return null;
    }
  }
  public async deleteDemographic(demographicId:number):Promise<string>{
    const selectedDemographic = await this.demographicRepository.findOne({where:{id:demographicId}});
    if(selectedDemographic){
      await this.demographicRepository.delete(demographicId);
      return 'delete success';
    }else {
      return 'delete fail';
    }
  }

}