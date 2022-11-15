import { connectToDatabase } from "../../util/mongodb";
import styles from "../../styles/Home.module.css";
import clickableWords from "../components/clickableWords";
import { useState } from "react";
import htmlToString from "../components/htmlToString";
import htmlText from "../components/htmlText";
import paragraphTemplate from "../components/paragraph_template";

export default function Chapter1({ newtest }) {

  const [paragraph1, setParagraph1] = useState(true)
  const [paragraph2, setParagraph2] = useState(true)
  const [paragraph3, setParagraph3] = useState(true)

  function onclick(setParagraph, paragraph) { setParagraph(!paragraph) }

  const author = "mathew"
  const chapter = "chapter_1" 

  const htmlParagraph1 = htmlText({ newtest }, { author, chapter, paragraph: 1 })
  const htmlParagraph2 = htmlText({ newtest }, { author, chapter, paragraph: 2 })
  const htmlParagraph3 = htmlText({ newtest }, { author, chapter, paragraph: 3 })
  const htmlParagraph4 = htmlText({ newtest }, { author, chapter, paragraph: 4 })
  const htmlParagraph5 = htmlText({ newtest }, { author, chapter, paragraph: 5 })
  const htmlParagraph6 = htmlText({ newtest }, { author, chapter, paragraph: 6 })
  const htmlParagraph7 = htmlText({ newtest }, { author, chapter, paragraph: 7 })
  const htmlParagraph8 = htmlText({ newtest }, { author, chapter, paragraph: 8 })
  const htmlParagraph9 = htmlText({ newtest }, { author, chapter, paragraph: 9 })
  const htmlParagraph10 = htmlText({ newtest }, { author, chapter, paragraph: 10 })
  const htmlParagraph11 = htmlText({ newtest }, { author, chapter, paragraph: 11 })
  const htmlParagraph12 = htmlText({ newtest }, { author, chapter, paragraph: 12 })
  const htmlParagraph13 = htmlText({ newtest }, { author, chapter, paragraph: 13 })
  const htmlParagraph14 = htmlText({ newtest }, { author, chapter, paragraph: 14 })
  const htmlParagraph15 = htmlText({ newtest }, { author, chapter, paragraph: 15 })
  const htmlParagraph16 = htmlText({ newtest }, { author, chapter, paragraph: 16 })
  const htmlParagraph17 = htmlText({ newtest }, { author, chapter, paragraph: 17 })
  const htmlParagraph18 = htmlText({ newtest }, { author, chapter, paragraph: 18 })
  const htmlParagraph19 = htmlText({ newtest }, { author, chapter, paragraph: 19 })
  const htmlParagraph20 = htmlText({ newtest }, { author, chapter, paragraph: 20 })
  const htmlParagraph21 = htmlText({ newtest }, { author, chapter, paragraph: 21 })
  const htmlParagraph22 = htmlText({ newtest }, { author, chapter, paragraph: 22 })
  const htmlParagraph23 = htmlText({ newtest }, { author, chapter, paragraph: 23 })
  const htmlParagraph24 = htmlText({ newtest }, { author, chapter, paragraph: 24 })
  const htmlParagraph25 = htmlText({ newtest }, { author, chapter, paragraph: 25 })

  const stringParagraph1 = htmlToString(htmlParagraph1);
  const stringParagraph2 = htmlToString(htmlParagraph2);
  const stringParagraph3 = htmlToString(htmlParagraph3);
  const stringParagraph4 = htmlToString(htmlParagraph4);
  const stringParagraph5 = htmlToString(htmlParagraph5);
  const stringParagraph6 = htmlToString(htmlParagraph6);
  const stringParagraph7 = htmlToString(htmlParagraph7);
  const stringParagraph8 = htmlToString(htmlParagraph8);
  const stringParagraph9 = htmlToString(htmlParagraph9);
  const stringParagraph10 = htmlToString(htmlParagraph10);
  const stringParagraph11 = htmlToString(htmlParagraph11);
  const stringParagraph12 = htmlToString(htmlParagraph12);
  const stringParagraph13 = htmlToString(htmlParagraph13);
  const stringParagraph14 = htmlToString(htmlParagraph14);
  const stringParagraph15 = htmlToString(htmlParagraph15);
  const stringParagraph16 = htmlToString(htmlParagraph16);
  const stringParagraph17 = htmlToString(htmlParagraph17);
  const stringParagraph18 = htmlToString(htmlParagraph18);
  const stringParagraph19 = htmlToString(htmlParagraph19);
  const stringParagraph20 = htmlToString(htmlParagraph20);
  const stringParagraph21 = htmlToString(htmlParagraph21);
  const stringParagraph22 = htmlToString(htmlParagraph22);
  const stringParagraph23 = htmlToString(htmlParagraph23);
  const stringParagraph24 = htmlToString(htmlParagraph24);
  const stringParagraph25 = htmlToString(htmlParagraph25);

  return (
    <div className={styles.container}>
      <div className="grid grid-row-10">
        <div className="grid grid-cols-3">
          <button onClick={() => onclick(setParagraph1, paragraph1)}>Paragraph 1</button>
          {paragraph1 && <div className="App font-serif text-justify">{clickableWords(stringParagraph1)}</div>}
        </div>
        <div className="grid grid-cols-3">
          <button onClick={() => onclick(setParagraph2, paragraph2)}>Paragraph 2</button>
          {paragraph2 && <div className="App font-serif text-justify">{clickableWords(stringParagraph2)}</div>}
        </div>
        <div>{paragraphTemplate(onclick, setParagraph3, paragraph3, clickableWords, stringParagraph3)}</div>
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
