import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class UserEntity{
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  userName:string;

  @Column()
  password:string;

  @Column()
  userType:string;

  @Column()
  firstName:string;

  @Column()
  lastName:string;

  @Column()
  birthDate:string;

  @Column()
  gender:string;

  @Column('jsonb')
  security:any;

  @Column()
  race: string;

  @Column()
  maritial: string;

  @Column()
  phone:string;

  @Column()
  email:string;
}