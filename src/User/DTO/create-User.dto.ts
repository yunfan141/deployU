import { IsInt,IsString } from 'class-validator';


export class CreateUserDto {
  @IsInt()
  id:number;

  @IsString()
  userName:string;

  @IsString()
  password:string;

  @IsString()
  userType:string;

  @IsString()
  firstName:string;

  @IsString()
  lastName:string;

  @IsString()
  birthDate:string;

  @IsString()
  gender:string;

  security:any;

  @IsString()
  phone:string;

  @IsString()
  email:string;
}