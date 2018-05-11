import { IsInt,IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDemographicDto{
  @ApiModelProperty()
  @IsInt()
  id:number;

  @ApiModelProperty()
  @IsInt()
  userId:number;

  @ApiModelProperty()
  @IsInt()
  questionId:number;

  @ApiModelProperty()
  @IsString()
  answer:any;

}