import {Component,Inject} from '@nestjs/common';
import {IQuestionnaireService,IQuestionnaire} from './Interfaces';
import {QuestionnaireEntity} from './questionnaire.entity';
import {Repository} from 'typeorm';

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
  public async deleteQuestionnaire(questionnaireId:number):Promise<string>{
    const selectedQuestionnaire = await this.questionnaireRepository.findOne({where:{id:questionnaireId}});
    if(selectedQuestionnaire){
      await this.questionnaireRepository.delete(questionnaireId);
      return 'delete success';
    }else{
      return 'delete fail';
    }
  }
}