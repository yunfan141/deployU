import { Module} from '@nestjs/common';
import { DatabaseModule} from '../Shared/DataBase/database.module';
import { userProvider} from './user.providers';
import { UserController} from './user.controller';
import { UserService} from './user.service';
import {AuthService} from '../auth/auth.service';

@Module({
  imports:[
    DatabaseModule
  ],
  components:[
    userProvider,UserService, AuthService
  ],
  controllers:[
    UserController
  ]
})

export class UserModule {}