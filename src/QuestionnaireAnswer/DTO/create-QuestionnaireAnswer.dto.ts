import { IsInt,IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateQuestionnaireAnswerDto {
  @ApiModelProperty()
  @IsInt()
  id:number;

  @ApiModelProperty()
  @IsInt()
  questionId:number;

  @ApiModelProperty()
  answer:any;

  @ApiModelProperty()
  @IsInt()
  weight:number;

  @ApiModelProperty()
  @IsString()
  domain:string;

  @ApiModelProperty()
  session:any;
}