import { IsInt,IsString } from 'class-validator';

export class CreateDemographicDto {
  @IsInt()
  id:number;

  @IsString()
  key:string;

  @IsString()
  label:string;

  @IsString()
  hint:string;

  @IsString()
  type:string;

  ansOptions:any;

  @IsInt()
  order:number;

  required:boolean;
}