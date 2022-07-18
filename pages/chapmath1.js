import { connectToDatabase } from "../util/mongodb";

export default function Par2({ newtest }) {
  return (
    <div>
      <h1></h1>
      <div>
        {newtest.map((x) => (
          <li>
            <h2>{x.chap}</h2>
          </li>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const newtest = await db
    .collection("newtest")
    .find({})
    .sort({})
    .limit(20)
    .toArray();

  return {
    props: {
      newtest: JSON.parse(JSON.stringify(newtest)),
    },
  };
}