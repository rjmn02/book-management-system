import { Injectable } from '@nestjs/common';
import { Book, Category, Prisma } from '@prisma/client';
import { CreateBookDto } from './create-book-dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async createBook(data: CreateBookDto): Promise<Book> {
    const { tags, genres, ...bookData } = data;

    return this.prisma.book.create({
      data: {
        ...bookData,
        tags: {
          connectOrCreate: tags?.map((name) => ({
            where: { name },
            create: { name },
          })),
        },
        genres: {
          connectOrCreate: genres?.map((name) => ({
            where: { name },
            create: { name },
          })),
        },
      },
      include: {
        tags: true,
        genres: true,
      },
    });
  }

  async book(
    bookWhereUniqueInput: Prisma.BookWhereUniqueInput,
  ): Promise<Book | null> {
    return this.prisma.book.findUnique({
      include: {
        tags: true,
        genres: true,
      },
      where: bookWhereUniqueInput,
    });
  }

  async books(params: {
    skip?: number;
    take?: number;
    tag?: string;
    genre?: string;
    title?: string;
    category?: string;
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput;
  }): Promise<Book[]> {
    const { skip, take, tag, genre, title, category, orderBy } = params;

    const categoryQuery: Prisma.BookWhereInput = category
      ? {
          category: {
            equals: category as Category,
          },
        }
      : {};

    const titleQuery: Prisma.BookWhereInput = title
      ? {
          title: {
            contains: title,
            mode: 'insensitive',
          },
        }
      : {};

    const tagQuery: Prisma.BookWhereInput = tag
      ? {
          tags: {
            some: {
              name: { equals: tag, mode: 'insensitive' },
            },
          },
        }
      : {};

    const genreQuery: Prisma.BookWhereInput = genre
      ? {
          genres: {
            some: {
              name: { equals: genre, mode: 'insensitive' },
            },
          },
        }
      : {};

    const where: Prisma.BookWhereInput = {
      ...titleQuery,
      ...categoryQuery,
      ...tagQuery,
      ...genreQuery,
    };

    return this.prisma.book.findMany({
      include: {
        tags: true,
        genres: true,
      },
      skip,
      take,
      where,
      orderBy,
    });
  }

  async updateBook(params: {
    where: Prisma.BookWhereUniqueInput;
    data: CreateBookDto;
  }): Promise<Book> {
    const { where, data } = params;
    const { tags, genres, ...bookData } = data;

    return this.prisma.book.update({
      where,
      data: {
        ...bookData,
        tags: {
          connectOrCreate: tags?.map((name) => ({
            where: { name },
            create: { name },
          })),
        },
        genres: {
          connectOrCreate: genres?.map((name) => ({
            where: { name },
            create: { name },
          })),
        },
      },
      include: {
        tags: true,
        genres: true,
      },
    });
  }

  async deleteBook(where: Prisma.BookWhereUniqueInput): Promise<Book> {
    return this.prisma.book.delete({
      where,
    });
  }
}
