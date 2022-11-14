import { connectToDatabase } from "../util/mongodb";
import jsxToString from "jsx-to-string";
import styles from "../styles/Home.module.css";
import clickableWords from "./components/cickableWords";
import { useState } from "react";

export default function Par2({ newtest }) {

  const [paragraph1, setParagraph1] = useState(null)
  const [paragraph2, setParagraph2] = useState(null)

  function onclick(fun, data) { fun(!data) }

  const para =

    <p>{newtest.map((x) => (<li><h2>{x.chap_1}</h2></li>))}</p>

  const par = jsxToString(para);

  const chapter_2 =

    <div>{newtest.map((x) => (<li><h2>{x.chap_2}</h2></li>))}</div>

  const par2 = jsxToString(chapter_2);

  return (
    <div className={styles.container}>
      <div className="grid grid-row-10">
        <div className="grid grid-row-2">
          <button className="" onClick={() => onclick(setParagraph1, paragraph1)}>Paragraph 1</button>
          {paragraph1 && <div className="App font-serif text-justify">{clickableWords(par)}</div>}
        </div>
        <div className="grid grid-row-2">
          <button onClick={() => onclick(setParagraph2, paragraph2)}>Paragraph 2</button>
          {paragraph2 && <div className="App font-serif text-justify">{clickableWords(par2)}</div>}
        </div>
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
