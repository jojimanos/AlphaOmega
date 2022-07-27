import { connectToDatabase } from "../util/mongodb";
import jsxToString from 'jsx-to-string'

export default function Par2({ newtest }) {
  const para = 
  
  <div>{newtest.map((x) => (<li key={x.chap}><h2>{x.chap}</h2></li>))}</div>

  const par = jsxToString(para)

  const clickableWords = () => {

    function dictionary(w) {
      let link1 = "http://www.perseus.tufts.edu/hopper/morph?l="
      let link2 = "&la=greek"
      let link = link1 + w + link2 
      open(link)
    }

    const arr = Array.from(par)
    const string = arr.join('')
    const string2 = string.slice(17)  
    const words = string2.split(/ /g );
    return words.map(w => 
      <a onClick={() => dictionary(w)}>  {w}  </a>
    );
  }

  return (
    <div className="App font-serif">
      {clickableWords()}
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