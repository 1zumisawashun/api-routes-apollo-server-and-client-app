import { Prisma } from "@prisma/client";
import { faker } from "@faker-js/faker";

export const users: Prisma.UserCreateInput[] = Array(3)
  .fill(null)
  .map((_) => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    status: "active",
    cart: {
      create: {}, // ユーザーに紐づいたカートを生成する
    },
  }));
