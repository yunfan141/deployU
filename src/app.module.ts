import { Module } from '@nestjs/common';
import { DatabaseModule } from './Shared/DataBase/database.module';

@Module({
  modules:[
    DatabaseModule
  ]
})
export class AppModule {}
