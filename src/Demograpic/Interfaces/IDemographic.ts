export interface IDemographic {
  readonly id:number;
  readonly key:string;
  readonly label:string;
  readonly hint:string;
  readonly type:string;
  readonly ansOptions:any;
  readonly order:number;
  readonly required:boolean;
}