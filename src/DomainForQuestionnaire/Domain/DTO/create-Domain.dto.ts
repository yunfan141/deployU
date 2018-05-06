import { IsString, IsInt } from 'class-validator';

export class CreateDomainDto {
  @IsInt()
  id:number;

  @IsString()
  domain:string;

  @IsInt()
  weight:number;

  subDomain:any;
}