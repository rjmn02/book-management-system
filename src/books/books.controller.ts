import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Category, Prisma } from '@prisma/client';
import { CreateBookDto } from './create-book-dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.createBook(createBookDto);
  }

  @Get()
  async findAll(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
    @Query('tag') tag?: string, // new
    @Query('genre') genre?: string, // new
    @Query('title') title?: string,
    @Query('category') category?: string,
    @Query('orderBy') orderBy?: string,
  ) {

    return this.booksService.books({
      skip: skip ? Number(skip) : 0,
      take: take ? Number(take) : 10,
      tag: tag ? String(tag) : undefined,
      genre: genre ? String(genre) : undefined,
      title: title ? String(title) : undefined,
      category: category ? String(category) : undefined,
      orderBy: orderBy ? JSON.parse(orderBy) : undefined,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const book = await this.booksService.book({ id: String(id) });
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBookDto: CreateBookDto) {
    return this.booksService.updateBook({
      where: { id: String(id) },
      data: updateBookDto,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const book = await this.booksService.deleteBook({ id: String(id) });
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }
}
