import { Module} from '@nestjs/common';
import { DatabaseModule} from '../../Shared/DataBase/database.module';
import { DomainController} from './domain.controller';
import { DomainService} from './domain.service';
import { domainProvider} from './domain.providers';

@Module({
  imports:[
    DatabaseModule
  ],
  components:[
    domainProvider,DomainService
  ],
  controllers:[
    DomainController
  ]
})

export class DomainModule {}