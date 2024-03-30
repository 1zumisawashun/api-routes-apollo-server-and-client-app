import { Resolvers } from "@/apollo/resolvers-types";

export const resolvers: Resolvers = {
  Query: {
    hello() {
      return "Hello World";
    },
    async viewer(_, { id }, { prisma }) {
      const viewer = await prisma.user.findFirstOrThrow({
        where: { id: +id },
      });
      return viewer;
    },
    async viewers(_, __, { prisma }) {
      const viewers = await prisma.user.findMany();
      return viewers;
    },
    featuredPlaylists: (_, __, { dataSources }) => {
      return dataSources.spotifyAPI.getFeaturedPlaylists();
    },
    playlist: (_, { id }, { dataSources }) => {
      return dataSources.spotifyAPI.getPlaylist(id);
    },
  },
  Mutation: {},
};
