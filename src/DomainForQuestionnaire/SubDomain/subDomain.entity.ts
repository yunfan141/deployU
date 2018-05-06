import { Entity, Column, PrimaryGeneratedColumn,ManyToOne } from 'typeorm';
import {DomainEntity} from '../Domain/domain.entity';

@Entity()
export class SubDomainEntity{
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  subDomain:string;

  @Column()
  weight:number;

  @ManyToOne(type => DomainEntity,domain => domain.subDomain)
  domain:DomainEntity;
}