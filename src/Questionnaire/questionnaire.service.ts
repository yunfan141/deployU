import {Component,Inject} from '@nestjs/common';
import {IQuestionnaireService,IQuestionnaire} from './Interfaces';
import {QuestionnaireEntity} from './questionnaire.entity';
import { getConnection, Repository } from 'typeorm';
import { DomainEntity } from '../DomainForQuestionnaire/Domain/domain.entity';
import {ExceptionHandler} from '@nestjs/core/errors/exception-handler';

@Component()
export class QuestionnaireService implements IQuestionnaireService{
  constructor(
    @Inject('QuestionnaireRepository') private readonly questionnaireRepository:Repository<QuestionnaireEntity>
  ){}

  public async getAllQuestionnaire():Promise<Array<QuestionnaireEntity>>{
    return await this.questionnaireRepository.find();
  }
  public async getQuestionnaireById(questionnaireId:number):Promise<QuestionnaireEntity|null>{
    return await this.questionnaireRepository.findOne({where:{id:questionnaireId}});
  }
  public async addQuestionnaire(questionnaire:IQuestionnaire):Promise<QuestionnaireEntity>{
    return await this.questionnaireRepository.save(questionnaire);
  }
  public async updateQuestionnaire(questionnaireId:number,newQuestionnaire:IQuestionnaire):Promise<QuestionnaireEntity|null>{
    const selectedQuestionnaire = await this.questionnaireRepository.findOne({where:{id:questionnaireId}});
    if(selectedQuestionnaire){
      await this.questionnaireRepository.update(questionnaireId,newQuestionnaire);
      return await this.questionnaireRepository.findOne({where:{id:questionnaireId}});
    }else{
      return null;
    }
  }
  public async deleteQuestionnaire(questionnaireId:number) {
    const selectedQuestionnaire = await this.questionnaireRepository.findOne({where:{id:questionnaireId}});
    if(selectedQuestionnaire){
      await this.questionnaireRepository.delete(questionnaireId);
      return;
    }else{
      throw ExceptionHandler;
    }
  }

  public async getQuestionnaireByDomain(domainId:number):Promise<Array<QuestionnaireEntity>>{
    const selectedDomain = await getConnection().getRepository(DomainEntity)
      .createQueryBuilder("domain").where("domain.id = :id",{id:domainId}).getOne();
    const selectedQuestionnaires = await getConnection().getRepository(QuestionnaireEntity)
      .createQueryBuilder("questionnaire").where("questionnaire.domain = :domain",{domain:selectedDomain.domain})
      .getMany();
    return await selectedQuestionnaires
  }

  public async getQuestionnaireCount():Promise<number>{
    const count = await await getConnection()
      .createQueryBuilder()
      .select()
      .from(QuestionnaireEntity,"questionnaire")
      .getCount();

    return await count;
  }
}