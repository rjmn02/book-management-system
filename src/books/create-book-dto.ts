import { Category } from "@prisma/client";

export class CreateBookDto {
  title: string;
  authorId?: string;
  category: Category;
  tags?: string[];
  genres?: string[];
}

