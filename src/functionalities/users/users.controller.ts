import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(
    @Body() createUserDto: any,
  ){
    console.log(createUserDto)
    return "Create user";
  }

  @Get()
  findAll(
    @Query() paginationDto: any,
  ){
    console.log(paginationDto)
    return "Get all users";
  }

  @Get(':term')
  findOne(
    @Param('term') term: string,
  ){
    console.log(term)
    return "Get user by term";
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: any,
  ){
    console.log(id)
    console.log(updateUserDto)
    return "Update user";
  }

}
