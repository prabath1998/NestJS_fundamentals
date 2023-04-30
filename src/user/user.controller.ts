/* eslint-disable prettier/prettier */
import {
    Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/user-update.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getHello(): any {
    return this.userService.get();
  }

  @Post()
  store(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('/:userId')
  getUser(@Param('userId',ParseIntPipe) userId: number) {
    return this.userService.show(userId);
  }

  @Delete('/:userId')
  deleteUser(@Param('userId',ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }

  @Patch('/:userId')
  updateUSer(@Body() updateUserDto: UpdateUserDto, @Param('userId',ParseIntPipe) userId: number) {
    return this.userService.update(updateUserDto, userId);
  }
}
