import { DemographicController} from './demographic.controller';
import { DemographicService} from './demographic.service';
import { demographicProvider} from './demographic.providers';
import { Module} from '@nestjs/common';
import { DatabaseModule} from '../Shared/DataBase/database.module';

@Module({
  imports:[
    DatabaseModule
  ],
  components:[
    demographicProvider,
    DemographicService
  ],
  controllers:[
    DemographicController
  ]
})

export class DemographicModule {}