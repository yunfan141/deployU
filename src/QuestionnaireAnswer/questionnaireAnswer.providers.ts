import {Connection} from 'typeorm';
import {QuestionnaireAnswerEntity} from './questionnaireAnswer.entity';

export const questionnaireAnserProvider = {
  provide:'QuestionnaireAnswerRepository',
  useFactory:(connection:Connection)=>connection.getRepository(QuestionnaireAnswerEntity),
  inject:['TypeORMInstance']
}