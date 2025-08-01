import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) {}

  async create(createAuthorDto: Prisma.AuthorCreateInput) {
    return this.prisma.author.create({
      data: createAuthorDto,
    });
  }

  async author(authorWhereUniqueInput: Prisma.AuthorWhereUniqueInput) {
    return this.prisma.author.findUnique({
      where: authorWhereUniqueInput,
      include: {
        books: true,
      },
    });
  }
  async authors(params: {
    skip?: number;
    take?: number;
    search?: string;
    orderBy?: Prisma.AuthorOrderByWithRelationInput;
  }) {
    const { skip, take, search, orderBy } = params;

    const where: Prisma.AuthorWhereInput = search
      ? {
          OR: [
            { firstName: { contains: search, mode: 'insensitive' } },
            { middleName: { contains: search, mode: 'insensitive' } },
            { lastName: { contains: search, mode: 'insensitive' } },
          ],
        }
      : {};

    return this.prisma.author.findMany({
      include: {
        books: true,
      },
      skip,
      take,
      where,
      orderBy,
    });
  }

  async updateAuthor(params: {
    where: Prisma.AuthorWhereUniqueInput;
    data: Prisma.AuthorUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.author.update({
      data,
      where,
    });
  }

  async deleteAuthor(where: Prisma.AuthorWhereUniqueInput) {
    return this.prisma.author.delete({
      where,
    });
  }
}
