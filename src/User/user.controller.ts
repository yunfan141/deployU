import {Controller, Get, Patch, Post, Param, Body, Delete, UseGuards} from '@nestjs/common';
import { UserService} from './user.service';
import { CreateUserDto} from './DTO/create-User.dto';
import { ApiUseTags } from '@nestjs/swagger';
import {AuthGuard} from '@nestjs/passport';

@Controller('User')
@ApiUseTags('HealthU')
export class UserController {
  constructor(
    private userService:UserService
  ){}

  @Get()
  public async getAllUser(){
    const msg = await this.userService.getAllUser();
    return msg;
  }

  @Get(':id')
  public async getUserById(@Param() params){
    const msg = await this.userService.getUserById(params.id);
    return msg;
  }

  @Post()
  public async addUser(@Body() user:CreateUserDto){
    const msg = await this.userService.addUser(user);
    return msg;
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  public async updateUser(@Param() params,@Body() newUser){
    const msg = await this.userService.updateUser(params.id,newUser);
    return msg;
  }

  @Delete(':id')
  public async deleteUser(@Param() params){
    const msg = await this.userService.deleteUser(params.id);
    return msg;
  }

  @Get('securityQuestions/:id')
  public async getUserSecurityQuestion(@Param() params){
    const msg = await this.userService.getUserSecurityQuestion(params.id);
    return msg;
  }

  @Patch('securityQuestion/:id')
  public async checkUserSecurityQuestion(@Param() params,@Body() answer){
    const msg = await this.userService.checkUserSecurityQuestion(params.id,answer);
    return msg;
  }


  @Post('/login')
    public async checkLoginStatus(@Body() LogInfo) {
      return await this.userService.checkLoginStatus(LogInfo);
  }
}