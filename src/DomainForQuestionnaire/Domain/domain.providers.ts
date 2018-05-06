import {Connection} from 'typeorm';
import {DomainEntity} from './domain.entity';

export const domainProvider = {
  provide:'DomainRepository',
  useFactory:(connection:Connection)=> connection.getRepository(DomainEntity),
  inject:['TypeORMInstance']
}