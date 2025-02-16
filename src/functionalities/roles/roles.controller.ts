import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Query } from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  create(
    @Body() createRoleDto: any,
  ){
    console.log(createRoleDto)
    return "Create role";
  }

  @Get()
  findAll(
    @Query() paginationDto: any,
  ){
    console.log(paginationDto)
    return "Get all roles";
  }

  @Get(':term')
  findOne(
    @Param('term') term: string,
  ){
    console.log(term)
    return "Get role by term";
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateRoleDto: any,
  ){
    console.log(id)
    console.log(updateRoleDto)
    return "Update role";
  }

}
