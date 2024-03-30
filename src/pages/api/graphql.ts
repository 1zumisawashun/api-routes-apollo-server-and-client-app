import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { prisma } from "@/libs/prisma";
import { SpotifyAPI } from "@/apollo/datasources/spotify";
import { resolvers } from "@/apollo/resolvers";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefs = loadSchemaSync("apollo/root.graphql", {
  loaders: [new GraphQLFileLoader()],
});

// import { readFileSync } from "fs";
// import path from "path";
// import { gql } from "graphql-tag";

// export const typeDefs = gql(
//   readFileSync(path.resolve(__dirname, "apollo/root.graphql"), {
//     encoding: "utf-8",
//   })
// );

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const apolloServer = new ApolloServer({ schema });

export default startServerAndCreateNextHandler(apolloServer, {
  context: async () => ({
    dataSources: {
      spotifyAPI: new SpotifyAPI(),
    },
    prisma,
  }),
});
