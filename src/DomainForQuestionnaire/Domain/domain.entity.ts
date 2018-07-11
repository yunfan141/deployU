import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from 'typeorm';
// import { SubDomainEntity } from '../SubDomain/subDomain.entity';

@Entity()
export class DomainEntity {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  domain:string;

  @Column()
  weight:number;

}