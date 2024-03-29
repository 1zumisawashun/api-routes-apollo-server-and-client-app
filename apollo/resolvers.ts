import { PrismaClient } from "@prisma/client";

interface Context {
  prisma: PrismaClient;
}

export const resolvers = {
  Query: {
    hello() {
      return "Hello World";
    },
    // FIXME:なぜかStringが渡ってくる
    async viewer(parent: undefined, args: { id: string }, { prisma }: Context) {
      console.log(args);
      const viewer = await prisma.user.findFirstOrThrow({
        where: { id: +args.id },
      });
      return viewer;
    },
    async viewers(parent: undefined, args: {}, { prisma }: Context) {
      const viewers = await prisma.user.findMany();
      return viewers;
    },
  },
};
