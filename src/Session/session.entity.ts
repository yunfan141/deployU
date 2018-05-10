import {Entity,Column,PrimaryGeneratedColumn,OneToMany,CreateDateColumn,UpdateDateColumn} from 'typeorm';
import { QuestionnaireAnswerEntity} from '../QuestionnaireAnswer/questionnaireAnswer.entity';

@Entity()
export class SessionEntity {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  userId:number;

  @CreateDateColumn()
  createDate:any;

  @UpdateDateColumn()
  updateDate:any;

  @OneToMany(type => QuestionnaireAnswerEntity,questionnaireAnswer =>questionnaireAnswer.session)
  questionnaireAnswer:QuestionnaireAnswerEntity[];
}