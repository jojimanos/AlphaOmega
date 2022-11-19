import { connectToDatabase } from "../../util/mongodb";
import styles from "../../styles/Home.module.css";
import htmlText from "../components/htmlText";
import htmlEnglishText from "../components/htmlEnglishText"
import paragraphTemplate from "../components/paragraph_template";
import { useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";


export default function Chapter1({ newtest }: any) {

  const [englishText, setEnglishText] = useState(false)

  function htmlToString(props: JSX.Element): string {
    let text
    return (text = reactElementToJSXString(props))
}

  //function englishTextAppear() { setEnglishText(!englishText) }

  const buttonText1 = "Paragraph 1"
  const buttonText2 = "Paragraph 2"
  const buttonText3 = "Paragraph 3"
  const buttonText4 = "Paragraph 4"
  const buttonText5 = "Paragraph 5"
  const buttonText6 = "Paragraph 6"
  const buttonText7 = "Paragraph 7"
  const buttonText8 = "Paragraph 8"
  const buttonText9 = "Paragraph 9"
  const buttonText10 = "Paragraph 10"
  const buttonText11 = "Paragraph 11"
  const buttonText12 = "Paragraph 12"
  const buttonText13 = "Paragraph 13"
  const buttonText14 = "Paragraph 14"
  const buttonText15 = "Paragraph 15"
  const buttonText16 = "Paragraph 16"
  const buttonText17 = "Paragraph 17"
  const buttonText18 = "Paragraph 18"
  const buttonText19 = "Paragraph 19"
  const buttonText20 = "Paragraph 20"
  const buttonText21 = "Paragraph 21"
  const buttonText22 = "Paragraph 22"
  const buttonText23 = "Paragraph 23"
  const buttonText24 = "Paragraph 24"
  const buttonText25 = "Paragraph 25"


  const author: string = "mathew"
  const authorEnglish: string = "mathew_english"
  const chapter: string = "chapter_1"

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

  const htmlEnglishParagraph1 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 1 })
  const htmlEnglishParagraph2 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 2 })
  const htmlEnglishParagraph3 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 3 })
  const htmlEnglishParagraph4 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 4 })
  const htmlEnglishParagraph5 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 5 })
  const htmlEnglishParagraph6 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 6 })
  const htmlEnglishParagraph7 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 7 })
  const htmlEnglishParagraph8 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 8 })
  const htmlEnglishParagraph9 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 9 })
  const htmlEnglishParagraph10 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 10 })
  const htmlEnglishParagraph11 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 11 })
  const htmlEnglishParagraph12 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 12 })
  const htmlEnglishParagraph13 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 13 })
  const htmlEnglishParagraph14 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 14 })
  const htmlEnglishParagraph15 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 15 })
  const htmlEnglishParagraph16 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 16 })
  const htmlEnglishParagraph17 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 17 })
  const htmlEnglishParagraph18 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 18 })
  const htmlEnglishParagraph19 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 19 })
  const htmlEnglishParagraph20 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 20 })
  const htmlEnglishParagraph21 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 21 })
  const htmlEnglishParagraph22 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 22 })
  const htmlEnglishParagraph23 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 23 })
  const htmlEnglishParagraph24 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 24 })
  const htmlEnglishParagraph25 = htmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 25 })

  const stringParagraph1 = htmlToString(htmlParagraph1);
  const stringParagraph2 = htmlToString(htmlParagraph2 as JSX.Element);
  const stringParagraph3 = htmlToString(htmlParagraph3 as JSX.Element);
  const stringParagraph4 = htmlToString(htmlParagraph4 as JSX.Element);
  const stringParagraph5 = htmlToString(htmlParagraph5 as JSX.Element);
  const stringParagraph6 = htmlToString(htmlParagraph6 as JSX.Element);
  const stringParagraph7 = htmlToString(htmlParagraph7 as JSX.Element);
  const stringParagraph8 = htmlToString(htmlParagraph8 as JSX.Element);
  const stringParagraph9 = htmlToString(htmlParagraph9 as JSX.Element);
  const stringParagraph10 = htmlToString(htmlParagraph10 as JSX.Element);
  const stringParagraph11 = htmlToString(htmlParagraph11 as JSX.Element);
  const stringParagraph12 = htmlToString(htmlParagraph12 as JSX.Element);
  const stringParagraph13 = htmlToString(htmlParagraph13 as JSX.Element);
  const stringParagraph14 = htmlToString(htmlParagraph14 as JSX.Element);
  const stringParagraph15 = htmlToString(htmlParagraph15 as JSX.Element);
  const stringParagraph16 = htmlToString(htmlParagraph16 as JSX.Element);
  const stringParagraph17 = htmlToString(htmlParagraph17 as JSX.Element);
  const stringParagraph18 = htmlToString(htmlParagraph18 as JSX.Element);
  const stringParagraph19 = htmlToString(htmlParagraph19 as JSX.Element);
  const stringParagraph20 = htmlToString(htmlParagraph20 as JSX.Element);
  const stringParagraph21 = htmlToString(htmlParagraph21 as JSX.Element);
  const stringParagraph22 = htmlToString(htmlParagraph22 as JSX.Element);
  const stringParagraph23 = htmlToString(htmlParagraph23 as JSX.Element);
  const stringParagraph24 = htmlToString(htmlParagraph24 as JSX.Element);
  const stringParagraph25 = htmlToString(htmlParagraph25 as JSX.Element);

  const stringEnglishParagraph1 = htmlToString(htmlEnglishParagraph1);
  const stringEnglishParagraph2 = htmlToString(htmlEnglishParagraph2);
  const stringEnglishParagraph3 = htmlToString(htmlEnglishParagraph3);
  const stringEnglishParagraph4 = htmlToString(htmlEnglishParagraph4);
  const stringEnglishParagraph5 = htmlToString(htmlEnglishParagraph5);
  const stringEnglishParagraph6 = htmlToString(htmlEnglishParagraph6);
  const stringEnglishParagraph7 = htmlToString(htmlEnglishParagraph7);
  const stringEnglishParagraph8 = htmlToString(htmlEnglishParagraph8);
  const stringEnglishParagraph9 = htmlToString(htmlEnglishParagraph9);
  const stringEnglishParagraph10 = htmlToString(htmlEnglishParagraph10);
  const stringEnglishParagraph11 = htmlToString(htmlEnglishParagraph11);
  const stringEnglishParagraph12 = htmlToString(htmlEnglishParagraph12);
  const stringEnglishParagraph13 = htmlToString(htmlEnglishParagraph13);
  const stringEnglishParagraph14 = htmlToString(htmlEnglishParagraph14);
  const stringEnglishParagraph15 = htmlToString(htmlEnglishParagraph15);
  const stringEnglishParagraph16 = htmlToString(htmlEnglishParagraph16);
  const stringEnglishParagraph17 = htmlToString(htmlEnglishParagraph17);
  const stringEnglishParagraph18 = htmlToString(htmlEnglishParagraph18);
  const stringEnglishParagraph19 = htmlToString(htmlEnglishParagraph19);
  const stringEnglishParagraph20 = htmlToString(htmlEnglishParagraph20);
  const stringEnglishParagraph21 = htmlToString(htmlEnglishParagraph21);
  const stringEnglishParagraph22 = htmlToString(htmlEnglishParagraph22);
  const stringEnglishParagraph23 = htmlToString(htmlEnglishParagraph23);
  const stringEnglishParagraph24 = htmlToString(htmlEnglishParagraph24);
  const stringEnglishParagraph25 = htmlToString(htmlEnglishParagraph25);

  return (
    <div className={styles.container}>
        <button onClick={() => { setEnglishText(!englishText) }}>English Text</button>
        <div>{paragraphTemplate(stringParagraph1, stringEnglishParagraph1, buttonText1, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph2, stringEnglishParagraph2, buttonText2, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph3, stringEnglishParagraph3, buttonText3, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph4, stringEnglishParagraph4, buttonText4, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph5, stringEnglishParagraph5, buttonText5, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph6, stringEnglishParagraph6, buttonText6, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph7, stringEnglishParagraph7, buttonText7, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph8, stringEnglishParagraph8, buttonText8, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph9, stringEnglishParagraph9, buttonText9, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph10, stringEnglishParagraph10, buttonText10, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph11, stringEnglishParagraph11, buttonText11, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph12, stringEnglishParagraph12, buttonText12, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph13, stringEnglishParagraph13, buttonText13, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph14, stringEnglishParagraph14, buttonText14, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph15, stringEnglishParagraph15, buttonText15, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph16, stringEnglishParagraph16, buttonText16, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph17, stringEnglishParagraph17, buttonText17, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph18, stringEnglishParagraph18, buttonText18, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph19, stringEnglishParagraph19, buttonText19, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph20, stringEnglishParagraph20, buttonText20, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph21, stringEnglishParagraph21, buttonText21, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph22, stringEnglishParagraph22, buttonText22, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph23, stringEnglishParagraph23, buttonText23, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph24, stringEnglishParagraph24, buttonText24, englishText)}</div>
        <div>{paragraphTemplate(stringParagraph25, stringEnglishParagraph25, buttonText25, englishText)}</div>
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
