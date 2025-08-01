import { Controller, Get, Post, Body, Patch, Param, Delete, Query, NotFoundException, Put } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { Prisma } from '@prisma/client';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  async create(@Body() createAuthorDto: Prisma.AuthorCreateInput) {
    return this.authorsService.create(createAuthorDto);
  }

  @Get()
  async findAll(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
    @Query('search') search?: string,
    @Query('orderBy') orderBy?: string,
  ) {
    const params: any = {
      skip: skip ? Number(skip) : 0,
      take: take ? Number(take) : 10,
      search: search ? String(search) : undefined,
      orderBy: orderBy ? JSON.parse(orderBy) : undefined,
    }
    return this.authorsService.authors(params);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const author = await this.authorsService.author({ id: String(id) });
    if (!author) {
      throw new NotFoundException('Author not found');
    }
    return author;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAuthorDto: Prisma.AuthorUpdateInput) {
    return this.authorsService.updateAuthor({
      where: { id: String(id) },
      data: updateAuthorDto,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const author = await this.authorsService.deleteAuthor({ id: String(id) });
    if (!author) {
      throw new NotFoundException('Author not found');
    }
    return author
  }
}
