import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const users = [
  {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    status: "active",
  },
  {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    status: "active",
  },
];

async function main() {
  // delete all
  await prisma.user.deleteMany();

  // seeding
  for (const user of users) {
    await prisma.user.create({
      data: user,
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
