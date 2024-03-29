import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./apollo/root.graphql",
  generates: {
    "./apollo/resolvers-types.ts": {
      config: {
        // contextType: "./src/pages/api/index#GraphQLContext",
        mappers: {
          Cart: "@prisma/client#Cart",
          CartItem: "@prisma/client#CartItem",
          Playlist: "./models#PlaylistModel",
          Track: "./models#TrackModel",
          AddItemsToPlaylistPayload: "./models#AddItemsToPlaylistPayloadModel",
        },
      },
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};
export default config;
