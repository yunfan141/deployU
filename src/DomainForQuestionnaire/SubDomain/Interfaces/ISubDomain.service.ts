import {ISubDomain} from './ISubDomain';
import {SubDomainEntity} from '../subDomain.entity';

export interface ISubDomainService {
  getAllSubDomain():Promise<Array<SubDomainEntity>>;
  getSubDomainById(subDomainId:number):Promise<SubDomainEntity|null>;
  addSubDomain(subDomain:ISubDomain):Promise<SubDomainEntity>;
  updateSubDomain(subDomainId:number,newSubDomain:ISubDomain):Promise<SubDomainEntity|null>;
  deleteSubDomain(subDomainId:number):Promise<string>;
}