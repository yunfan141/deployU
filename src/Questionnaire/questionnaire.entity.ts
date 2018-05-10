import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class QuestionnaireEntity {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  key:string;

  @Column()
  label:string;

  @Column()
  hint:string;

  @Column()
  type:string;

  @Column('jsonb')
  ansOptions:any;

  @Column()
  order:number;

  @Column()
  required:boolean;

  @Column()
  domain:string;

  @Column()
  weight:number;
}