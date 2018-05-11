import { IsInt,IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateQuestionnaireDto{
  @ApiModelProperty()
  @IsInt()
  id:number;

  @ApiModelProperty()
  @IsString()
  key:string;

  @ApiModelProperty()
  @IsString()
  label:string;

  @ApiModelProperty()
  @IsString()
  hint:string;

  @ApiModelProperty()
  @IsString()
  type:string;

  @ApiModelProperty()
  ansOptions:any;

  @ApiModelProperty()
  @IsInt()
  order:number;

  @ApiModelProperty()
  required:boolean;

  @ApiModelProperty()
  @IsString()
  domain:string;

  @ApiModelProperty()
  @IsString()
  weight:number;
  
}