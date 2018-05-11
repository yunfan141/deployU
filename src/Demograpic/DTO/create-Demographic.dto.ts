import { IsInt,IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';


export class CreateDemographicDto {
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
}