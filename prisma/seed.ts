import { PrismaClient } from "@prisma/client";
import { cartItems } from "./cart";
import { users } from "./user";

const prisma = new PrismaClient();

async function main() {
  // delete all
  await prisma.user.deleteMany();
  await prisma.cart.deleteMany();
  await prisma.cartItem.deleteMany();

  // seeding
  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }
  for (const cartItem of cartItems) {
    await prisma.cartItem.create({
      data: cartItem,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
