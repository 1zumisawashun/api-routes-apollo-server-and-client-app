import { Resolvers } from "@/apollo/resolvers-types";

export const resolvers: Resolvers = {
  Query: {
    hello() {
      return "Hello World";
    },
    viewer(_, { id }, { prisma }) {
      return prisma.user.findFirstOrThrow({
        where: { id: +id },
      });
    },
    viewers(_, __, { prisma }) {
      return prisma.user.findMany();
    },
    featuredPlaylists: (_, __, { dataSources }) => {
      return dataSources.spotifyAPI.getFeaturedPlaylists();
    },
    playlist: (_, { id }, { dataSources }) => {
      return dataSources.spotifyAPI.getPlaylist(id);
    },
    jsonPlaceholderUser: (_, { id }, { dataSources }) => {
      return dataSources.jsonPlaceholderUserAPI.getUser(id);
    },
    jsonPlaceholderUsers: (_, __, { dataSources }) => {
      return dataSources.jsonPlaceholderUserAPI.getUsers();
    },
    jsonPlaceholderPost: (_, { id }, { dataSources }) => {
      return dataSources.jsonPlaceholderPostAPI.getPost(id);
    },
    jsonPlaceholderPosts: (_, __, { dataSources }) => {
      return dataSources.jsonPlaceholderPostAPI.getPosts();
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
