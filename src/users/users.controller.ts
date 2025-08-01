import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async findAll(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
    @Query('where') where?: string,
    @Query('orderBy') orderBy?: string,
  ) {
    const params: any = {
      skip: skip ? Number(skip) : 0,
      take: take ? Number(take) : 10,
      where: where ? JSON.parse(where) : undefined,
      orderBy: orderBy ? JSON.parse(orderBy) : undefined,
    };
    return this.userService.users(params);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.user({ id: String(id) });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }


  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: Prisma.UserUpdateInput,
  ) {
    return this.userService.updateUser({
      where: { id: String(id) },
      data: updateUserDto,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const user = await this.userService.user({ id: String(id) });
    if (!user) throw new NotFoundException('User not found');
    return this.userService.deleteUser({ id: String(id) });
  }
}
