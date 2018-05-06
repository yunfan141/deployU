import {Controller, Get, Patch, Post, Param, Body,Delete} from '@nestjs/common';
import { UserService} from './user.service';
import { CreateUserDto} from './DTO/create-User.dto';

@Controller('User')
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
  public async updateUser(@Param() params,@Body() newUser){
    const msg = await this.userService.updateUser(params.id,newUser);
    return msg;
  }

  @Delete(':id')
  public async deleteUser(@Param() params){
    const msg = await this.userService.deleteUser(params.id);
    return msg;
  }
}