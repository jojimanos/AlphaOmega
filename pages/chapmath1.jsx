import { connectToDatabase } from "../util/mongodb";

export default function Par2({ newtest }) {
  const par = 
  <div><h1></h1><div>{newtest.map((x) => (<li><h2>{x.chap}</h2></li>))}</div></div>

  const paragraph = par.props.children

  const handleClick = (word) => {
    alert('Alert!')
    console.log(word);
    // handle the rest
  };

  const renderParagraph = () => Array.from(paragraph)
    .map((word) => <span onClick={() => handleClick(word)}>{word}</span>);

  return (
    <div className="App">
      {renderParagraph()}
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