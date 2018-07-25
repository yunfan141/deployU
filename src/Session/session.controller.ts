import {Controller, Get, Post, Patch, Delete, Param, Body, UseGuards} from '@nestjs/common';
import {SessionService} from './session.service';
import { CreateSessionDto} from './DTO/create-Session.dto';
import { ApiUseTags } from '@nestjs/swagger';
import {AuthGuard} from '@nestjs/passport';

@Controller('session')
@ApiUseTags('HealthU')
export class SessionController{
  constructor(
    private sessionService:SessionService
  ){}

  @Get()
  public async getAllSession(){
    const msg = await this.sessionService.getAllSession();
    return msg;
  }

  @Get(':id')
  public async getSessionById(@Param() params){
    const msg = await this.sessionService.getSessionById(params.id);
    return msg;
  }

  @Get('/getSessionByUser/:id')
  // @UseGuards(AuthGuard('jwt'))
  public async getSessionByUserId(@Param() params) {
    return await this.sessionService.getSessionByUserId(params.id);
  }

  @Post()
  // @UseGuards(AuthGuard('jwt'))
  public async createSession(@Body() session) {
    return await this.sessionService.createSession(session);
  }

  @Patch('/addSession/:id')
  public async addSession(@Body() session:CreateSessionDto,@Param() params) {
      return await this.sessionService.addSession(params.id, session);
  }

  // @Post()
  // public async addSession(@Body() session:CreateSessionDto){
  //   const msg = await this.sessionService.addSession(session);
  //   return msg;
  // }

  @Patch(':id')
  public async updateSession(@Param() params,@Body() newSession:CreateSessionDto){
    const msg = await this.sessionService.updateSession(params.id,newSession);
    return msg;
  }

  @Delete(':id')
  // @UseGuards(AuthGuard('jwt'))
  public async deleteSession(@Param() params){
    const msg = await this.sessionService.deleteSession(params.id);
    return msg;
  }

  @Get('questionnaireAnswer/:id')
  // @UseGuards(AuthGuard('jwt'))
  public async getSessionWithQuestionnaireAnswer(@Param() params){
    const msg = await this.sessionService.getSessionWithQuestionnaireAnswer(params.id);
    return msg;
  }

  @Get('/questionAndAnswer/:id')
  // @UseGuards(AuthGuard('jwt'))
  public async getQuestionAndAnswerBySession(@Param() params) {
    return await this.sessionService.getQuestionAndAnswerBySessionId(params.id);
  }
}