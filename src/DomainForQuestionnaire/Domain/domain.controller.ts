import {Controller, Get, Patch, Post, Param, Body, Delete, UseGuards} from '@nestjs/common';
import {CreateDomainDto} from './DTO/create-Domain.dto';
import {DomainService} from './domain.service';
import { ApiUseTags } from '@nestjs/swagger';
import {AuthGuard} from '@nestjs/passport';

@Controller('domain')
@ApiUseTags('HealthU')
export class DomainController {
  constructor(
    private domainService:DomainService
  ){}

  @Get()
  // @UseGuards(AuthGuard('jwt'))
  public async getAllDomain(){
    const msg = await this.domainService.getAllDomain();
    return msg;
  }

  @Get(':id')
  public async getDomainById(@Param() params){
    const msg = await this.domainService.getDomainById(params.id);
    return msg;
  }

  @Get('/completion/:id')
    public async getDomainCompletion(@Param() params) {
      return await this.domainService.getDomainCompletion(params.id);
    }

  @Post()
  // @UseGuards(AuthGuard('jwt'))
  public async addDomain(@Body() domain:CreateDomainDto){
    const msg = await this.domainService.addDomain(domain);
    return msg;
  }

  @Patch(':id')
  public async updateDomain(@Param() params,@Body() newDomain:CreateDomainDto){
    const msg = await this.domainService.updateDomain(params.id,newDomain);
    return msg;
  }

  @Delete(':id')
  // @UseGuards(AuthGuard('jwt'))
  public async deleteDomain(@Param() params){
    const msg = await this.domainService.deleteDomain(params.id);
    return msg;
  }
}