export interface IQuestionnaireAnswer {
  readonly id:number;
  readonly questionId:number;
  readonly answer:any;
  readonly domain:string;
  readonly weight:number;
  readonly session:any;
}