import {Controller, Get, Patch, Post, Param, Body,Delete} from '@nestjs/common';
import {CreateDomainDto} from './DTO/create-Domain.dto';
import {DomainService} from './domain.service';
import { ApiUseTags } from '@nestjs/swagger';

@Controller('domain')
@ApiUseTags('HealthU')
export class DomainController {
  constructor(
    private domainService:DomainService
  ){}

  @Get()
  public async getAllDomain(){
    const msg = await this.domainService.getAllDomain();
    return msg;
  }

  @Get(':id')
  public async getDomainById(@Param() params){
    const msg = await this.domainService.getDomainById(params.id);
    return msg;
  }

  @Post()
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
  public async deleteDomain(@Param() params){
    const msg = await this.domainService.deleteDomain(params.id);
    return msg;
  }
}