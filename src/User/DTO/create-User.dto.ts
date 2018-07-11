import { IsInt,IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';


export class CreateUserDto {
  @ApiModelProperty()
  @IsInt()
  id:number;

  @ApiModelProperty()
  @IsString()
  userName:string;

  @ApiModelProperty()
  @IsString()
  password:string;

  @ApiModelProperty()
  @IsString()
  userType:string;

  @ApiModelProperty()
  @IsString()
  firstName:string;

  @ApiModelProperty()
  @IsString()
  lastName:string;

  @ApiModelProperty()
  @IsString()
  birthDate:string;

  @ApiModelProperty()
  @IsString()
  gender:string;

  @ApiModelProperty()
  security:any;

  @ApiModelProperty()
  @IsString()
  race: string;

  @ApiModelProperty()
  @IsString()
  maritial: string;

  @ApiModelProperty()
  @IsString()
  phone:string;

  @ApiModelProperty()
  @IsString()
  email:string;
}