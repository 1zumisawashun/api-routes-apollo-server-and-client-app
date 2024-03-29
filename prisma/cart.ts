import { Prisma } from "@prisma/client";
import { faker } from "@faker-js/faker";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const cartItems: Prisma.CartItemCreateInput[] = Array(10)
  .fill(null)
  .map((_) => ({
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: getRandomNumber(1000, 10000),
    quantity: 1,
    image: "https://placehold.jp/400x250.png",
  }));
