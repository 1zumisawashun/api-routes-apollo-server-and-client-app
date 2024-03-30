import Link from "next/link";
import { useQuery, gql } from "@apollo/client";

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
      <p>{data.hello}</p>
      <Link href="/users">users</Link> page.
      <Link href="/users/1">user</Link> page.
      <Link href="/cart">cart</Link> page.
    </div>
  );
}

