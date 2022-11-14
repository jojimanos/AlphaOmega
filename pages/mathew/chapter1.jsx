import { connectToDatabase } from "../../util/mongodb";
import styles from "../../styles/Home.module.css";
import clickableWords from "../components/cickableWords";
import { useState } from "react";
import htmlToString from "../components/htmlToString";
import htmlText from "../components/htmlText";

export default function Chapter1({ newtest }) {

  const [paragraph1, setParagraph1] = useState(null)
  const [paragraph2, setParagraph2] = useState(null)

  function onclick(setParagraph, paragraph) { setParagraph(!paragraph) }

  const chap_1 = "chap_1"
  const chap_2 = "chap_2"

  const htmlChapter1 = htmlText({newtest}, chap_1)
  const htmlChapter2 = htmlText({newtest}, chap_2)

  const chapter1 = htmlToString(htmlChapter1);
  const chapter2 = htmlToString(htmlChapter2);

  return (
    <div className={styles.container}>
      <div className="grid grid-row-10">
        <div className="grid grid-row-2">
          <button className="" onClick={() => onclick(setParagraph1, paragraph1)}>Paragraph 1</button>
          {paragraph1 && <div className="App font-serif text-justify">{clickableWords(chapter1)}</div>}
        </div>
        <div className="grid grid-row-2">
          <button onClick={() => onclick(setParagraph2, paragraph2)}>Paragraph 2</button>
          {paragraph2 && <div className="App font-serif text-justify">{clickableWords(chapter2)}</div>}
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
