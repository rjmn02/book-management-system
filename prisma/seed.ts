import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Create a default user with a hashed password
  const hashedPassword = await bcrypt.hash('password123', 10);
  const user = await prisma.user.create({
    data: {
      username: 'admin',
      password: hashedPassword,
    },
  });

  // Create authors
  const author1 = await prisma.author.create({
    data: { firstName: 'Jane', lastName: 'Austen' },
  });
  const author2 = await prisma.author.create({
    data: { firstName: 'Mark', lastName: 'Twain' },
  });
  const author3 = await prisma.author.create({
    data: { firstName: 'George', lastName: 'Orwell' },
  });

  // Create books with authors
  await prisma.book.create({
    data: {
      title: 'Pride and Prejudice',
      authorId: author1.id,
      published: new Date('1813-01-28'),
    },
  });
  await prisma.book.create({
    data: {
      title: 'Adventures of Huckleberry Finn',
      authorId: author2.id,
      published: new Date('1884-12-10'),
    },
  });
  await prisma.book.create({
    data: {
      title: '1984',
      authorId: author3.id,
      published: new Date('1949-06-08'),
    },
  });

  console.log('Seed data created.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });