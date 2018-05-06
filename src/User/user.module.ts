import { Module} from '@nestjs/common';
import { DatabaseModule} from '../Shared/DataBase/database.module';
import { userProvider} from './user.providers';
import { UserController} from './user.controller';
import { UserService} from './user.service';

@Module({
  imports:[
    DatabaseModule
  ],
  components:[
    userProvider,UserService
  ],
  controllers:[
    UserController
  ]
})

export class UserModule {}