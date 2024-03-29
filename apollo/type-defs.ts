import { gql } from "@apollo/client";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    status: String!
  }

  type Query {
    viewer: User
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
 * これで直接GraphQLのスキーマを定義することができる、確かにVSCodeのタグ補完が効くのは便利だな
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


/**
   * The subscribe callback executed right after processing the request
   * before proceeding with the GraphQL operation execution.
   *
   * If you return `ExecutionResult` from the callback, it will be used
   * directly for responding to the request. Useful for implementing a response
   * cache.
   *
   * If you return `ExecutionArgs` from the callback, it will be used instead of
   * trying to build one internally. In this case, you are responsible for providing
   * a ready set of arguments which will be directly plugged in the operation execution.
   *
   * You *must* validate the `ExecutionArgs` yourself if returning them.
   *
   * If you return an array of `GraphQLError` from the callback, they will be reported
   * to the client while complying with the spec.
   *
   * Omitting the fields `contextValue` from the returned `ExecutionArgs` will use the
   * provided `context` option, if available.
   *
   * Useful for preparing the execution arguments following a custom logic. A typical
   * use-case is persisted queries. You can identify the query from the request parameters
   * and supply the appropriate GraphQL operation execution arguments.
   *
   * If you want to respond to the client with a custom status and/or body,
   * you should do by returning a `Request` argument which will stop
   * further execution.
   */