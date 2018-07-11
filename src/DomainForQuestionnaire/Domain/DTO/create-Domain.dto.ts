import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateDomainDto {
  @ApiModelProperty()
  @IsInt()
  id:number;

  @ApiModelProperty()
  @IsString()
  domain:string;

  @ApiModelProperty()
  @IsInt()
  weight:number;

}