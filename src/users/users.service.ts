import { Injectable } from '@nestjs/common';
<<<<<<< HEAD
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
=======
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { Prisma, User } from '@prisma/client';
>>>>>>> 286677c97281a5f40f47ccac0a32b29340f909f0

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

<<<<<<< HEAD
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }
=======
  async createUser(data: Prisma.UserCreateInput): Promise<User> {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return this.prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  });
}
>>>>>>> 286677c97281a5f40f47ccac0a32b29340f909f0

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
