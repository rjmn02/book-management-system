import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient()

async function main() {
  // Create default user
  const user = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: await bcrypt.hash('password123', 10)
    },
  })

  // Create genres
  const genres = await prisma.genre.createMany({
    data: [
      { name: 'Fantasy' },
      { name: 'Science Fiction' },
      { name: 'Romance' },
      { name: 'Mystery' },
    ],
    skipDuplicates: true,
  })

  // Create tags
  const tags = await prisma.tag.createMany({
    data: [
      { name: 'Bestseller' },
      { name: 'New Release' },
      { name: 'Classic' },
    ],
    skipDuplicates: true,
  })

  // Create authors
  const author1 = await prisma.author.create({
    data: {
      firstName: 'John',
      middleName: 'M',
      lastName: 'Smith',
    },
  })

  const author2 = await prisma.author.create({
    data: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
  })

  // Create books
  const book1 = await prisma.book.create({
    data: {
      title: 'The Great Adventure',
      published: new Date('2020-01-01'),
      category: 'BOOK',
      author: { connect: { id: author1.id } },
      genres: { connect: [{ name: 'Fantasy' }] },
      tags: { connect: [{ name: 'Bestseller' }] },
    },
  })

  const book2 = await prisma.book.create({
    data: {
      title: 'Mystery in the Shadows',
      published: new Date('2021-05-10'),
      category: 'COMIC',
      author: { connect: { id: author2.id } },
      genres: { connect: [{ name: 'Mystery' }] },
      tags: { connect: [{ name: 'Classic' }] },
    },
  })

  console.log('🌱 Database has been seeded. 🌱')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
