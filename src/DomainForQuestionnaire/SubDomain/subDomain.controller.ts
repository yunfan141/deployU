import {Controller, Get, Patch, Post, Param, Body,Delete} from '@nestjs/common';
import {CreateSubDomainDto} from './DTO/create-SubDomain.dto';
import {SubDomainService} from './subDomain.service';
import { ApiUseTags } from '@nestjs/swagger';

@Controller('subDomain')
@ApiUseTags('HealthU')
export class SubDomainController {
  constructor(
    private subDomainService:SubDomainService
  ){}

  @Get()
  public async getAllSubDomain(){
    const msg = await this.subDomainService.getAllSubDomain();
    return msg;
  }

  @Get(':id')
  public async getSubDomainById(@Param() params){
    const msg = await this.subDomainService.getSubDomainById(params.id);
    return msg;
  }

  @Post()
  public async addSubDomain(@Body() subDomain:CreateSubDomainDto){
    const msg = await this.subDomainService.addSubDomain(subDomain);
    return msg;
  }

  @Patch(':id')
  public async updateSubDomain(@Param() params,@Body() newSubDomain:CreateSubDomainDto){
    const msg = await this.subDomainService.updateSubDomain(params.id,newSubDomain);
    return msg;
  }

  @Delete(':id')
  public async deleteSubDomain(@Param() params){
    const msg = await this.subDomainService.deleteSubDomain(params.id);
    return msg;
  }
}
