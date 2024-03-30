import { SpotifyAPI } from "@/apollo/datasources/spotify";
import { JsonPlaceholderPostAPI } from "@/apollo/datasources/json-placeholder-post";
import { JsonPlaceholderUserAPI } from "@/apollo/datasources/json-placeholder-user";
import type { PrismaClient } from "@prisma/client";

export type Context = {
  dataSources: {
    spotifyAPI: SpotifyAPI;
    jsonPlaceholderPostAPI: JsonPlaceholderPostAPI;
    jsonPlaceholderUserAPI: JsonPlaceholderUserAPI;
  };
  prisma: PrismaClient;
};
