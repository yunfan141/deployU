import { IsInt,IsString } from 'class-validator';

export class CreateQuestionnaireAnswerDto {
  @IsInt()
  id:number;

  @IsInt()
  questionId:number;

  answer:any;

  @IsInt()
  weight:number;

  @IsString()
  domain:string;

  session:any;
}