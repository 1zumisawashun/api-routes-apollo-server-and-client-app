import { SpotifyAPI } from "@/apollo/datasources/spotify";
import type { PrismaClient } from "@prisma/client";

export type Context = {
  dataSources: {
    spotifyAPI: SpotifyAPI;
  };
  prisma: PrismaClient;
};
