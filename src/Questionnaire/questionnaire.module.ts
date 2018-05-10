import {Module} from '@nestjs/common';
import {QuestionnaireController} from './questionnaire.controller';
import {QuestionnaireService} from './questionnaire.service';
import {DatabaseModule} from '../Shared/DataBase/database.module';
import {questionnaireProvider} from './questionnaire.providers';

@Module({
  imports:[
    DatabaseModule
  ],
  components:[
    QuestionnaireService,
    questionnaireProvider
  ],
  controllers:[
    QuestionnaireController
  ]
})

export class QuestionnaireModule {
  
}