import { gql } from "@apollo/client";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    status: String!
  }

  type Query {
    viewer(id: ID!): User
    viewers: [User]
    hello: String!
  }
`;

/**
 * @description The @apollo/client package includes graphql-tag as a dependency and re-exports gql
 * @see https://www.apollographql.com/docs/react/migrating/apollo-client-3-migration/#graphql-tag
 * */

// import { readFileSync } from "fs";
// import path from "path";
// import { gql } from "graphql-tag";

// const typeDefs = gql(
//   readFileSync(path.resolve(__dirname, "./schema.graphql"), {
//     encoding: "utf-8",
//   })
// );

/**
 * @description 以下のように読み込むこともできる
 * @see https://zenn.dev/s_takashi/articles/4f918f47779de2#next.js%E3%81%AEapi%E3%83%AB%E3%83%BC%E3%83%88%E3%81%ABapolloserver%E3%82%92%E8%A8%AD%E7%BD%AE%E3%81%99%E3%82%8B
 */

// import { loadSchemaSync } from '@graphql-tools/load'
// import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'

// const typeDefs = loadSchemaSync('src/pages/api/graphql/schema/root.graphql', {
//   loaders: [new GraphQLFileLoader()],
// })

/**
 * これで直接GraphQLのスキーマを定義することができる、確かにVSCodeのタグ補完が効くのは便利だな、つまりDocumentNodeでなくても問題ない
 * @see https://zenn.dev/dqn/articles/vercel-next-apollo
 */

// export const typeDefs = /* GraphQL */ `
//   type Post {
//     id: ID!
//     title: String!
//   }

//   type Query {
//     posts: [Post!]!
//   }
// `;
