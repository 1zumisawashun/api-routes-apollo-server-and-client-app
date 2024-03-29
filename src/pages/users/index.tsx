import Link from "next/link";
import { useQuery, gql } from "@apollo/client";
import { initializeApollo } from "../../../apollo/client";

const ViewersQuery = gql`
  query ViewersQuery {
    viewers {
      id
      name
      email
      status
    }
  }
`;

export default function Pages() {
  const { data, loading, error } = useQuery(ViewersQuery);

  if (loading) return <p>ローディング中です</p>;
  if (error) return <p>エラーが発生しています</p>;

  return (
    <div>
      {data.viewers.map((user) => {
        return (
          <p>
            You're signed in as {user.name} and you're {user.status} goto
            <Link href={`/user/${user.id}`}>static</Link> page.
          </p>
        );
      })}
    </div>
  );
}

// export async function getStaticProps() {
//   const apolloClient = initializeApollo();

//   await apolloClient.query({
//     query: ViewerQuery,
//   });

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//   };
// }
