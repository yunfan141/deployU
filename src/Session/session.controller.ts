import {Controller,Get,Post,Patch,Delete,Param,Body} from '@nestjs/common';
import {SessionService} from './session.service';
import { CreateSessionDto} from './DTO/create-Session.dto';
import { ApiUseTags } from '@nestjs/swagger';

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

  @Post()
  public async addSession(@Body() session:CreateSessionDto){
    const msg = await this.sessionService.addSession(session);
    return msg;
  }

  @Patch(':id')
  public async updateSession(@Param() params,@Body() newSession:CreateSessionDto){
    const msg = await this.sessionService.updateSession(params.id,newSession);
    return msg;
  }

  @Delete(':id')
  public async deleteSession(@Param() params){
    const msg = await this.sessionService.deleteSession(params.id);
    return msg;
  }

  @Get('questionnaireAnswer/:id')
  public async getSessionWithQuestionnaireAnswer(@Param() params){
    const msg = await this.sessionService.getSessionWithQuestionnaireAnswer(params.id);
    return msg;
  }
}