import {Module} from '@nestjs/common';
import {UserDemographicController} from './userDemographic.controller';
import {UserDemographicService} from './userDemographic.service';
import {userDemographicProvider} from './userDemographic.providers';
import {DatabaseModule} from '../Shared/DataBase/database.module';

@Module({
  imports:[
    DatabaseModule
  ],
  controllers:[
    UserDemographicController
  ],
  components:[
    UserDemographicService,
    userDemographicProvider
  ]
})

export class UserDemographicModule {
  
}