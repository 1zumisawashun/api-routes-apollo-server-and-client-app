import gql from "graphql-tag";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { initializeApollo } from "../../apollo/client";

const HelloQuery = gql`
  query HelloQuery {
    hello
  }
`;

export default function Pages() {
  const { data, loading, error } = useQuery(HelloQuery);

  if (loading) return <p>ローディング中です</p>;
  if (error) return <p>エラーが発生しています</p>;

  return (
    <div>
      <p>{data.hello} world!</p>
      <Link href="/users">users</Link> page.
      <Link href="/users/1">user</Link> page.
      <Link href="/cart">cart</Link> page.
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: HelloQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
