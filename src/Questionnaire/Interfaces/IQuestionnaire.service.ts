import {IQuestionnaire} from './IQuestionnaire';
import {QuestionnaireEntity} from '../questionnaire.entity';

export interface IQuestionnaireService {
  getAllQuestionnaire():Promise<Array<QuestionnaireEntity>>;
  getQuestionnaireById(questionnaireId:number):Promise<QuestionnaireEntity|null>;
  addQuestionnaire(questionnaire:IQuestionnaire):Promise<QuestionnaireEntity>;
  updateQuestionnaire(questionnaireId:number,newQuestionnaire:IQuestionnaire):Promise<QuestionnaireEntity|null>;
  deleteQuestionnaire(questionnaireId:number);
}