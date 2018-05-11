import {Controller,Get, Post, Patch, Delete, Body,Param} from '@nestjs/common';
import {QuestionnaireAnswerService} from './questionnaireAnswer.service';
import {CreateQuestionnaireAnswerDto} from './DTO/create-QuestionnaireAnswer.dto';
import { ApiUseTags } from '@nestjs/swagger';

@Controller('questionnaireAnswer')
@ApiUseTags('HealthU')
export class QuestionnaireAnswerController {
  constructor(
    private quesionnaireAnswerService: QuestionnaireAnswerService
  ){}

  @Get()
  public async getAllQuestionnaireAnswer(){
    const msg = await this.quesionnaireAnswerService.getAllQuestionnaireAnswer();
    return msg;
  }

  @Get(':id')
  public async getQuestionnaireAnswerById(@Param() params){
    const msg = await this.quesionnaireAnswerService.getQuestionnaireAnswerById(params.id);
    return msg;
  }

  @Post()
  public async addQuestionnaireAnswer(@Body() questionnaireAnswer:CreateQuestionnaireAnswerDto){
    const msg = await this.quesionnaireAnswerService.addQuestionnaireAnswer(questionnaireAnswer);
    return msg;
  }

  @Patch(':id')
  public async updateQuestionnaireAnswer(@Param() params,@Body() newQuestionnaireAnswer:CreateQuestionnaireAnswerDto){
    const msg = await this.quesionnaireAnswerService.updateQuestionnaireAnswer(params.id,newQuestionnaireAnswer);
    return msg;
  }
}