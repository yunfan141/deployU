import { IsInt,IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';


export class CreateDemographicDto {
  @ApiModelProperty({type:Number})
  @IsInt()
  id:number;

  @ApiModelProperty({type:String})
  @IsString()
  key:string;

  @ApiModelProperty({type:String})
  @IsString()
  label:string;

  @ApiModelProperty({type:String})
  @IsString()
  hint:string;

  @ApiModelProperty({type:String})
  @IsString()
  type:string;

  @ApiModelProperty({type:Object})
  ansOptions:any;

  @ApiModelProperty({type:Number})
  @IsInt()
  order:number;

  @ApiModelProperty({type:Boolean})
  required:boolean;
}