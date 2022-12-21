import { connectToDatabase } from "../../util/mongodb";
import styles from "../../styles/Home.module.css";
import HtmlEnglishText from "../components/htmlEnglishText"
import ParagraphTemplate from "../components/paragraph_template";
import { useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import HtmlText from "../components/htmlText";
import data from "../../data/greek_text.json"

export default function Chapter1() {

  const newtest = JSON.parse(JSON.stringify(data))

  const author: string = "mathew"
  const chapter: string = "chapter_1"
  const paragraph: string = "paragraph_1"

  const text = newtest

  const [englishText, setEnglishText] = useState(false)

  function htmlToString(props: JSX.Element): string {
    let text: string
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



  const authorEnglish: string = "mathew_english"


  const htmlParagraph1 = HtmlText(text, { author, chapter, paragraph: "paragraph_1" })
  const htmlParagraph2 = HtmlText(text, { author, chapter, paragraph: "paragraph_2" })
  const htmlParagraph3 = HtmlText(text, { author, chapter, paragraph: "paragraph_3" })
  const htmlParagraph4 = HtmlText(text, { author, chapter, paragraph: "paragraph_4" })
  const htmlParagraph5 = HtmlText(text, { author, chapter, paragraph: "paragraph_5" })
  const htmlParagraph6 = HtmlText(text, { author, chapter, paragraph: "paragraph_6" })
  const htmlParagraph7 = HtmlText(text, { author, chapter, paragraph: "paragraph_7" })
  const htmlParagraph8 = HtmlText(text, { author, chapter, paragraph: "paragraph_8" })
  const htmlParagraph9 = HtmlText(text, { author, chapter, paragraph: "paragraph_9" })
  const htmlParagraph10 = HtmlText(text, { author, chapter, paragraph: "paragraph_10" })
  const htmlParagraph11 = HtmlText(text, { author, chapter, paragraph: "paragraph_11" })
  const htmlParagraph12 = HtmlText(text, { author, chapter, paragraph: "paragraph_12" })
  const htmlParagraph13 = HtmlText(text, { author, chapter, paragraph: "paragraph_13" })
  const htmlParagraph14 = HtmlText(text, { author, chapter, paragraph: "paragraph_14" })
  const htmlParagraph15 = HtmlText(text, { author, chapter, paragraph: "paragraph_15" })
  const htmlParagraph16 = HtmlText(text, { author, chapter, paragraph: "paragraph_16" })
  const htmlParagraph17 = HtmlText(text, { author, chapter, paragraph: "paragraph_17" })
  const htmlParagraph18 = HtmlText(text, { author, chapter, paragraph: "paragraph_18" })
  const htmlParagraph19 = HtmlText(text, { author, chapter, paragraph: "paragraph_19" })
  const htmlParagraph20 = HtmlText(text, { author, chapter, paragraph: "paragraph_20" })
  const htmlParagraph21 = HtmlText(text, { author, chapter, paragraph: "paragraph_21" })
  const htmlParagraph22 = HtmlText(text, { author, chapter, paragraph: "paragraph_22" })
  const htmlParagraph23 = HtmlText(text, { author, chapter, paragraph: "paragraph_23" })
  const htmlParagraph24 = HtmlText(text, { author, chapter, paragraph: "paragraph_24" })
  const htmlParagraph25 = HtmlText(text, { author, chapter, paragraph: "paragraph_25" })

  //const htmlEnglishParagraph1 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 1 })
  //const htmlEnglishParagraph2 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 2 })
  //const htmlEnglishParagraph3 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 3 })
  //const htmlEnglishParagraph4 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 4 })
  //const htmlEnglishParagraph5 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 5 })
  //const htmlEnglishParagraph6 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 6 })
  //const htmlEnglishParagraph7 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 7 })
  //const htmlEnglishParagraph8 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 8 })
  //const htmlEnglishParagraph9 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 9 })
  //const htmlEnglishParagraph10 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 10 })
  //const htmlEnglishParagraph11 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 11 })
  //const htmlEnglishParagraph12 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 12 })
  //const htmlEnglishParagraph13 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 13 })
  //const htmlEnglishParagraph14 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 14 })
  //const htmlEnglishParagraph15 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 15 })
  //const htmlEnglishParagraph16 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 16 })
  //const htmlEnglishParagraph17 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 17 })
  //const htmlEnglishParagraph18 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 18 })
  //const htmlEnglishParagraph19 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 19 })
  //const htmlEnglishParagraph20 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 20 })
  //const htmlEnglishParagraph21 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 21 })
  //const htmlEnglishParagraph22 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 22 })
  //const htmlEnglishParagraph23 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 23 })
  //const htmlEnglishParagraph24 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 24 })
  //const htmlEnglishParagraph25 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 25 })

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
  const stringParagraph25 = htmlToString(htmlParagraph25)

  const stringEnglishParagraph1 = "aa"
  //= htmlToString(htmlEnglishParagraph1);
  //const stringEnglishParagraph2 = htmlToString(htmlEnglishParagraph2);
  //const stringEnglishParagraph3 = htmlToString(htmlEnglishParagraph3);
  //const stringEnglishParagraph4 = htmlToString(htmlEnglishParagraph4);
  //const stringEnglishParagraph5 = htmlToString(htmlEnglishParagraph5);
  //const stringEnglishParagraph6 = htmlToString(htmlEnglishParagraph6);
  //const stringEnglishParagraph7 = htmlToString(htmlEnglishParagraph7);
  //const stringEnglishParagraph8 = htmlToString(htmlEnglishParagraph8);
  //const stringEnglishParagraph9 = htmlToString(htmlEnglishParagraph9);
  //const stringEnglishParagraph10 = htmlToString(htmlEnglishParagraph10);
  //const stringEnglishParagraph11 = htmlToString(htmlEnglishParagraph11);
  //const stringEnglishParagraph12 = htmlToString(htmlEnglishParagraph12);
  //const stringEnglishParagraph13 = htmlToString(htmlEnglishParagraph13);
  //const stringEnglishParagraph14 = htmlToString(htmlEnglishParagraph14);
  //const stringEnglishParagraph15 = htmlToString(htmlEnglishParagraph15);
  //const stringEnglishParagraph16 = htmlToString(htmlEnglishParagraph16);
  //const stringEnglishParagraph17 = htmlToString(htmlEnglishParagraph17);
  //const stringEnglishParagraph18 = htmlToString(htmlEnglishParagraph18);
  //const stringEnglishParagraph19 = htmlToString(htmlEnglishParagraph19);
  //const stringEnglishParagraph20 = htmlToString(htmlEnglishParagraph20);
  //const stringEnglishParagraph21 = htmlToString(htmlEnglishParagraph21);
  //const stringEnglishParagraph22 = htmlToString(htmlEnglishParagraph22);
  //const stringEnglishParagraph23 = htmlToString(htmlEnglishParagraph23);
  //const stringEnglishParagraph24 = htmlToString(htmlEnglishParagraph24);
  //const stringEnglishParagraph25 = htmlToString(htmlEnglishParagraph25);

  console.log(stringParagraph1)

  return (
    <div className={styles.container}>
      <button onClick={() => { setEnglishText(!englishText) }}>English Text</button>
      <div>
        <div>{ParagraphTemplate(stringParagraph1, stringEnglishParagraph1, buttonText1, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph2, stringEnglishParagraph1, buttonText2, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph3, stringEnglishParagraph1, buttonText3, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph4, stringEnglishParagraph1, buttonText4, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph5, stringEnglishParagraph1, buttonText5, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph6, stringEnglishParagraph1, buttonText6, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph7, stringEnglishParagraph1, buttonText7, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph8, stringEnglishParagraph1, buttonText8, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph9, stringEnglishParagraph1, buttonText9, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph10, stringEnglishParagraph1, buttonText10, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph11, stringEnglishParagraph1, buttonText11, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph12, stringEnglishParagraph1, buttonText12, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph13, stringEnglishParagraph1, buttonText13, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph14, stringEnglishParagraph1, buttonText14, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph15, stringEnglishParagraph1, buttonText15, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph16, stringEnglishParagraph1, buttonText16, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph17, stringEnglishParagraph1, buttonText17, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph18, stringEnglishParagraph1, buttonText18, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph19, stringEnglishParagraph1, buttonText19, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph20, stringEnglishParagraph1, buttonText20, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph21, stringEnglishParagraph1, buttonText21, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph22, stringEnglishParagraph1, buttonText22, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph23, stringEnglishParagraph1, buttonText23, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph24, stringEnglishParagraph1, buttonText24, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph25, stringEnglishParagraph1, buttonText25, englishText)}</div>
      </div>
    </div>
  );
}

//export async function getStaticProps() {
//  const { db } = await connectToDatabase();
//
//  const newtest = await db
//    .collection("newtest")
//    .find({})
//    .sort({})
//    .limit(20)
//    .toArray();
//
//  return {
//    props: {
//      newtest: JSON.parse(JSON.stringify(newtest)),
//    },
//  };
//}
