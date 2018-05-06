import { Module } from '@nestjs/common';
import { DatabaseModule } from './Shared/DataBase/database.module';
import { UserModule } from './User/user.module';

@Module({
  modules:[
    DatabaseModule,
    UserModule
  ]
})
export class AppModule {}
