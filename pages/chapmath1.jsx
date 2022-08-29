import { connectToDatabase } from "../util/mongodb";
import jsxToString from 'jsx-to-string'
import styles from '../styles/Home.module.css'
import clickableWords from "./components/cickableWords"

export default function Par2({ newtest }) {
  const para = 
  
  <div>{newtest.map((x) => (<li key={x.chap_1}><h2>{x.chap_1}</h2></li>))}</div>

  const par = jsxToString(para)

  return (
    <div className={styles.container}>
    <div className="App font-serif text-justify">
      {clickableWords(par)}
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