import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class UserDemographicEntity {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  userId:number;

  @Column()
  questionId:number;

  @Column('jsonb')
  answer:any;
}