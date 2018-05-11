import {Controller,Get,Post,Patch,Delete,Body,Param} from '@nestjs/common';
import {UserDemographicService} from './userDemographic.service';
import {CreateUserDemographicDto} from './DTO/create-UserDemographic.dto';
import { ApiUseTags } from '@nestjs/swagger';

@Controller('userDemographic')
@ApiUseTags('HealthU')
export class UserDemographicController {
  constructor(
    private userDemographicService: UserDemographicService
  ){}

  @Get()
  public async getAllUserDemographic(){
    const msg = await this.userDemographicService.getAllUserDemographics();
    return msg;
  }

  @Get(':id')
  public async getUserDemographicById(@Param() params){
    const msg = await this.userDemographicService.getUserDemographicById(params.id);
    return msg
  }

  @Post()
  public async addUserDemographic(@Body() userDemographic:CreateUserDemographicDto){
    const msg = await this.userDemographicService.addUserDemographic(userDemographic);
    return msg;
  }

  @Patch(':id')
  public async updateUserDemographic(@Param() params,@Body() newUserDemographic:CreateUserDemographicDto){
    const msg = await this.userDemographicService.updateUserDemographic(params.id,newUserDemographic);
    return msg;
  }
}