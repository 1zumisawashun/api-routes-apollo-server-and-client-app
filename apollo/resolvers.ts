import { PrismaClient } from "@prisma/client";

interface Context {
  prisma: PrismaClient;
}

export const resolvers = {
  Query: {
    hello() {
      return "Hello World";
    },
    async viewer(parent: undefined, args: { id: number }, { prisma }: Context) {
      const viewer = await prisma.user.findFirstOrThrow({
        where: { id: args.id },
      });
      return viewer;
    },
    async viewers(parent: undefined, args: {}, { prisma }: Context) {
      const viewers = await prisma.user.findMany();
      console.log(viewers);
      return viewers;
    },
  },
};
