import {Entity,Column,PrimaryGeneratedColumn,ManyToOne} from 'typeorm';
import { SessionEntity } from '../Session/session.entity';

@Entity()
export class QuestionnaireAnswerEntity {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  questionId:number;

  @Column('jsonb')
  answer:any;

  @Column()
  domain:string;

  @Column()
  weight:number;

  @ManyToOne(type => SessionEntity,session => session.questionnaireAnswer)
  session:SessionEntity;
}