import { Module} from '@nestjs/common';
import { QuestionnaireAnswerController} from './questionnaireAnswer.controller';
import { QuestionnaireAnswerService} from './questionnaireAnswer.service';
import { DatabaseModule} from '../Shared/DataBase/database.module';
import { questionnaireAnserProvider} from './questionnaireAnswer.providers';

@Module({
  imports:[
    DatabaseModule
  ],
  components:[
    QuestionnaireAnswerService,
    questionnaireAnserProvider
  ],
  controllers:[
    QuestionnaireAnswerController
  ]
})

export class QuestionnaireAnswerModule {
  
}