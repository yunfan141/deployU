import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateSubDomainDto {
  @ApiModelProperty()
  @IsInt()
  id:number;

  @ApiModelProperty()
  @IsString()
  subDomain:string;

  @ApiModelProperty()
  @IsInt()
  weight:number;

  @ApiModelProperty()
  domain:any;
}