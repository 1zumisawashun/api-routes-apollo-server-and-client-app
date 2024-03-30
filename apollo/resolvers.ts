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
  Mutation: {
    addItemsToPlaylist: async (_, { input }, { dataSources }) => {
      try {
        const response = await dataSources.spotifyAPI.addItemsToPlaylist(input);
        if (response.snapshot_id) {
          return {
            code: 200,
            success: true,
            message: "Tracks added to playlist!",
            playlistId: response.snapshot_id,
          };
        } else {
          throw Error("snapshot_id property not found");
        }
      } catch (err) {
        return {
          code: 500,
          success: false,
          message: `Something went wrong: ${err}`,
          playlist: null,
        };
      }
    },
  },
  Playlist: {
    tracks: ({ tracks }) => {
      const { items = [] } = tracks;
      return items.map(({ track }) => track);
    },
  },
  Track: {
    durationMs: (parent) => parent.duration_ms,
  },
  AddItemsToPlaylistPayload: {
    playlist: ({ playlistId }, _, { dataSources }) => {
      return dataSources.spotifyAPI.getPlaylist(playlistId);
    },
  },
};
