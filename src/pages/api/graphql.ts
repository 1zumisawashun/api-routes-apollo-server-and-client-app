import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { prisma } from "@/libs/prisma";
import { SpotifyAPI } from "@/apollo/datasources/spotify";
import { resolvers } from "@/apollo/resolvers";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { JsonPlaceholderPostAPI } from "@/apollo/datasources/json-placeholder-post";
import { JsonPlaceholderUserAPI } from "@/apollo/datasources/json-placeholder-user";

const typeDefs = loadSchemaSync("apollo/root.graphql", {
  loaders: [new GraphQLFileLoader()],
});

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const apolloServer = new ApolloServer({ schema });

export default startServerAndCreateNextHandler(apolloServer, {
  context: async () => ({
    dataSources: {
      spotifyAPI: new SpotifyAPI(),
      jsonPlaceholderUserAPI: new JsonPlaceholderUserAPI(),
      jsonPlaceholderPostAPI: new JsonPlaceholderPostAPI(),
    },
    prisma,
  }),
});
