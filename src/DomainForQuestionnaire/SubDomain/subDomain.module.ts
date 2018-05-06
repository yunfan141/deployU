import { Module} from '@nestjs/common';
import { DatabaseModule} from '../../Shared/DataBase/database.module';
import { subDomainProvider} from './subDomain.providers';
import { SubDomainController} from './subDomain.controller';
import { SubDomainService} from './subDomain.service';

@Module({
  imports:[
    DatabaseModule
  ],
  components:[
    subDomainProvider,
    SubDomainService
  ],
  controllers:[
    SubDomainController
  ]
})

export class SubDomainModule {}