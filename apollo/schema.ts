import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./type-defs";
import { resolvers } from "./resolvers";
import { prisma } from "@/libs/prisma";

type TContextValue = {
  dataSources: {};
  prisma: typeof prisma;
};

export const schema = makeExecutableSchema<TContextValue>({
  typeDefs,
  resolvers,
});

/**
 * @description apollo-serverは内部的にschemaを作っていて問題はexpress-graphqlとかがそれに対応していないからか
 * @see https://www.apollographql.com/docs/apollo-server/api/apollo-server/#schema
 */

// import { ApolloServer } from "@apollo/server";
// const apolloServer = new ApolloServer({ schema });
// const apolloServer = new ApolloServer({ typeDefs, resolvers });


