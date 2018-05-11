import { IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateSessionDto{
  @ApiModelProperty()
  @IsInt()
  id:number;

  @ApiModelProperty()
  @IsInt()
  userId:number;

  @ApiModelProperty()
  createDate:any;

  @ApiModelProperty()
  updateDate:any;

  @ApiModelProperty()
  questionnaireAnswer:any;
}