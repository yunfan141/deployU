import {Component,Inject} from '@nestjs/common';
import {IQuestionnaireAnswer,IQuestionnaireAnswerService} from './Interfaces';
import {Repository} from 'typeorm';
import { QuestionnaireAnswerEntity } from './questionnaireAnswer.entity';

@Component()
export class QuestionnaireAnswerService implements IQuestionnaireAnswerService{
  constructor(
    @Inject('QuestionnaireAnswerRepository') private readonly questionnaireAnswerRepository: Repository<QuestionnaireAnswerEntity>
  ){}

  public async getAllQuestionnaireAnswer():Promise<Array<QuestionnaireAnswerEntity>>{
    return await this.questionnaireAnswerRepository.find();
  }
  public async getQuestionnaireAnswerById(questionnaireAnswerId:number):Promise<QuestionnaireAnswerEntity|null>{
    return await this.questionnaireAnswerRepository.findOne({where:{id:questionnaireAnswerId}});
  }
  public async addQuestionnaireAnswer(questionnaireAnswer:IQuestionnaireAnswer):Promise<QuestionnaireAnswerEntity>{
    return await this.questionnaireAnswerRepository.save(questionnaireAnswer);
  }
  public async updateQuestionnaireAnswer(questionnaireAnswerId:number,newQuestionnaireAnswer:IQuestionnaireAnswer):Promise<QuestionnaireAnswerEntity|null>{
    const selectedQuestionnaireAnswer = await this.questionnaireAnswerRepository.findOne({where:{id:questionnaireAnswerId}});
    if(selectedQuestionnaireAnswer){
      await this.questionnaireAnswerRepository.update(questionnaireAnswerId,newQuestionnaireAnswer);
      return await this.questionnaireAnswerRepository.findOne({where:{id:questionnaireAnswerId}});
    }else{
      return null;
    }
  }
  public async deleteQuestionnaireAnswer(questionnaireAnswerId:number):Promise<string>{
    const selectedQuestionnaireAnswer = await this.questionnaireAnswerRepository.findOne({where:{id:questionnaireAnswerId}});
    if(selectedQuestionnaireAnswer){
      await this.questionnaireAnswerRepository.delete(questionnaireAnswerId);
      return 'delete success';
    }else{
      return 'delete fail';
    }
  }

}