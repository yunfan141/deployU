import { IDomain} from './IDomain';
import { DomainEntity} from '../domain.entity';

export interface IDomainService {
  getAllDomain():Promise<Array<DomainEntity>>;
  getDomainById(domainId:number):Promise<DomainEntity|null>;
  addDomain(domain:IDomain):Promise<DomainEntity>;
  updateDomain(domainId:number,newDomain:IDomain):Promise<DomainEntity|null>;
  deleteDomain(domainId:number);
}