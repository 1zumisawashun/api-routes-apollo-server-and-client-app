import Link from "next/link";
import { useQuery, gql } from "@apollo/client";

const ViewerQuery = gql`
  query ViewerQuery($id: ID!) {
    viewer(id: $id) {
      id
      name
      email
      status
    }
  }
`;

export default function Pages() {
  const { data, loading, error } = useQuery(ViewerQuery, {
    variables: { id: 1 },
  });

  if (loading) return <p>ローディング中です</p>;
  if (error) return <p>エラーが発生しています</p>;

  return (
    <div>
      You're signed in as {data.viewer.name} and you're {data.viewer.status}{" "}
      goto
      <Link href="/about">static</Link> page.
    </div>
  );
}

