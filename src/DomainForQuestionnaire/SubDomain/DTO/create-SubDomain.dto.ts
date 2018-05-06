import { IsString, IsInt } from 'class-validator';

export class CreateSubDomainDto {
  @IsInt()
  id:number;

  @IsString()
  subDomain:string;

  @IsInt()
  weight:number;

  domain:any;
}