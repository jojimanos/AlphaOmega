import fetchNewTestCollection from "../util/bibleClient/bibleDataWrapper";

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
  let newtest = fetchNewTestCollection();

  newtest = newtest.trim();

  return {
    props: {
      newtest: JSON.parse((newtest)),
    },
  };
}
