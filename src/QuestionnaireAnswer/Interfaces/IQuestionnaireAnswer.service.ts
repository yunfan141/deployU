import {IQuestionnaireAnswer} from './IQuestionnaireAnswer';
import {QuestionnaireAnswerEntity} from '../questionnaireAnswer.entity';

export interface IQuestionnaireAnswerService {
  getAllQuestionnaireAnswer():Promise<Array<QuestionnaireAnswerEntity>>;
  getQuestionnaireAnswerById(id:number):Promise<QuestionnaireAnswerEntity|null>;
  addQuestionnaireAnswer(questionnaireAnswer:IQuestionnaireAnswer):Promise<QuestionnaireAnswerEntity>;
  updateQuestionnaireAnswer(id:number,newQuestionnaireAnswer:IQuestionnaireAnswer):Promise<QuestionnaireAnswerEntity|null>;
  deleteQuestionnaireAnswer(id:number):Promise<string>;
}