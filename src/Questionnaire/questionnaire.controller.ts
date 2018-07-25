import {Controller, Post, Get, Patch, Delete, Param, Body, UseGuards} from '@nestjs/common';
import { CreateQuestionnaireDto} from './DTO/create-Questionnaire.dto';
import { QuestionnaireService} from './questionnaire.service';
import { ApiUseTags } from '@nestjs/swagger';
import {AuthGuard} from '@nestjs/passport';

@Controller('questionnaire')
@ApiUseTags('HealthU')
export class QuestionnaireController {
  constructor(
    private questionnaireService:QuestionnaireService
  ){}

  @Get()
  // @UseGuards(AuthGuard('jwt'))
  public async getAllQuestionnaire(){
    const msg = await this.questionnaireService.getAllQuestionnaire();
    return msg;
  }

  @Get(':id')
  public async getQuestionnaireById(@Param() params){
    const msg = await this.questionnaireService.getQuestionnaireById(params.id);
    return msg;
  }

  @Post()
  // @UseGuards(AuthGuard('jwt'))
  public async addQuestionnaire(@Body() questionnaire:CreateQuestionnaireDto){
    const msg = await this.questionnaireService.addQuestionnaire(questionnaire);
    return msg;
  }

  @Patch(':id')
  public async updateQuestionnaire(@Param() params,newQuestionnaire:CreateQuestionnaireDto){
    const msg = await this.questionnaireService.updateQuestionnaire(params.id,newQuestionnaire);
    return msg;
  }

  @Delete(':id')
  public async deleteQuestionnaire(@Param() params){
    const msg = await this.questionnaireService.deleteQuestionnaire(params.id);
    return msg;
  }

  @Get('domain/:id')
  // @UseGuards(AuthGuard('jwt'))
  public async getQuestionnairesByDomain(@Param() params){
    const msg = await this.questionnaireService.getQuestionnaireByDomain(params.id);
    return msg;
  }
}