import { Module } from '@nestjs/common';
import { DatabaseModule } from './Shared/DataBase/database.module';
import { UserModule } from './User/user.module';
import { DomainModule } from './DomainForQuestionnaire/Domain/domain.module';
import { SubDomainModule } from './DomainForQuestionnaire/SubDomain/subDomain.module';

@Module({
  modules:[
    DatabaseModule,
    UserModule,
    DomainModule,
    SubDomainModule
  ]
})
export class AppModule {}
