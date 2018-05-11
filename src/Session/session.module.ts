import {Module} from '@nestjs/common';
import {SessionController} from './session.controller';
import {SessionService} from './session.service';
import {sessionProvider} from './session.providers';
import {DatabaseModule} from '../Shared/DataBase/database.module';
import {questionnaireAnserProvider} from '../QuestionnaireAnswer/questionnaireAnswer.providers';

@Module({
  imports:[
    DatabaseModule
  ],
  components:[
    sessionProvider,
    SessionService,
    questionnaireAnserProvider
  ],
  controllers:[
    SessionController
  ]
})

export class SessionModule{}