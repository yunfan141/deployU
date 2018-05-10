import { IsInt } from 'class-validator';

export class CreateSessionDto{
  @IsInt()
  id:number;

  @IsInt()
  userId:number;

  createDate:any;

  updateDate:any;

  questionnaireAnswer:any;
}