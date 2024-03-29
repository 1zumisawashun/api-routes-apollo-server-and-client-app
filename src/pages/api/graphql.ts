import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { schema } from "../../../apollo/schema";
import { prisma } from "@/libs/prisma";

const apolloServer = new ApolloServer({ schema });

export default startServerAndCreateNextHandler(apolloServer, {
  context: async () => ({
    dataSources: {},
    prisma,
  }),
});
