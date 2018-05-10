import { IsInt,IsString } from 'class-validator';

export class CreateUserDemographicDto{
  @IsInt()
  id:number;

  @IsInt()
  userId:number;

  @IsInt()
  questionId:number;

  @IsString()
  answer:any;

}