import { Connection} from 'typeorm';
import { UserEntity} from './user.entity';

export const userProvider = {
  provide:'UserRepository',
  useFactory:(connection:Connection)=>connection.getRepository(UserEntity),
  inject:['TypeORMInstance']
}