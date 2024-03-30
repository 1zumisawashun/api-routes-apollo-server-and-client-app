import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./apollo/root.graphql",
  generates: {
    "./apollo/resolvers-types.ts": {
      config: {
        // NOTE:./apollo/resolvers-types.tsから見た相対パスで指定する
        mappers: {
          User: "@prisma/client/index.d#User",
          Cart: "@prisma/client/index.d#Cart",
          CartItem: "@prisma/client/index.d#CartItem",
          Playlist: "./models#PlaylistModel",
          Track: "./models#TrackModel",
          AddItemsToPlaylistPayload: "./models#AddItemsToPlaylistPayloadModel",
        },
        contextType: "./contexts#Context",
      },
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};
export default config;
