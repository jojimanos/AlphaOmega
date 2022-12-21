import { connectToDatabase } from "../../util/mongodb";
import styles from "../../styles/Home.module.css";
import HtmlEnglishText from "../components/htmlEnglishText"
import ParagraphTemplate from "../components/paragraph_template";
import { useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import HtmlText from "../components/htmlText";
import data from "../../data/greek_text.json"
import dataEnglish from "../../data/english_text.json"
import dynamic from "next/dynamic";

export default function Chapter1() {

  const HtmlText = dynamic(() => import('../components/htmlText'))

  const HtmlEnglishText = dynamic(() => import('../components/htmlEnglishText'))

  const newtest = JSON.parse(JSON.stringify(data))

  const text = newtest

  const newtestEnglish = JSON.parse(JSON.stringify(dataEnglish))

  const textEnglish = newtestEnglish

  const author: string = "mathew"
  const chapter: string = "chapter_1"
  const authorEnglish: string = "mathew_english"

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

  const htmlParagraph1 = <HtmlText text={text[author][chapter]["paragraph_1"]}/>
  const htmlParagraph2 = <HtmlText text={text[author][chapter]["paragraph_2"]}/>
  const htmlParagraph3 = <HtmlText text={text[author][chapter]["paragraph_3"]}/>
  const htmlParagraph4 = <HtmlText text={text[author][chapter]["paragraph_4"]}/>
  const htmlParagraph5 = <HtmlText text={text[author][chapter]["paragraph_5"]}/>
  const htmlParagraph6 = <HtmlText text={text[author][chapter]["paragraph_6"]}/>
  const htmlParagraph7 = <HtmlText text={text[author][chapter]["paragraph_7"]}/>
  const htmlParagraph8 = <HtmlText text={text[author][chapter]["paragraph_8"]}/>
  const htmlParagraph9 = <HtmlText text={text[author][chapter]["paragraph_9"]}/>
  const htmlParagraph10 = <HtmlText text={text[author][chapter]["paragraph_10"]}/>
  const htmlParagraph11 = <HtmlText text={text[author][chapter]["paragraph_11"]}/>
  const htmlParagraph12 = <HtmlText text={text[author][chapter]["paragraph_12"]}/>
  const htmlParagraph13 = <HtmlText text={text[author][chapter]["paragraph_13"]}/>
  const htmlParagraph14 = <HtmlText text={text[author][chapter]["paragraph_14"]}/>
  const htmlParagraph15 = <HtmlText text={text[author][chapter]["paragraph_15"]}/>
  const htmlParagraph16 = <HtmlText text={text[author][chapter]["paragraph_16"]}/>
  const htmlParagraph17 = <HtmlText text={text[author][chapter]["paragraph_17"]}/>
  const htmlParagraph18 = <HtmlText text={text[author][chapter]["paragraph_18"]}/>
  const htmlParagraph19 = <HtmlText text={text[author][chapter]["paragraph_19"]}/>
  const htmlParagraph20 = <HtmlText text={text[author][chapter]["paragraph_20"]}/>
  const htmlParagraph21 = <HtmlText text={text[author][chapter]["paragraph_21"]}/>
  const htmlParagraph22 = <HtmlText text={text[author][chapter]["paragraph_22"]}/>
  const htmlParagraph23 = <HtmlText text={text[author][chapter]["paragraph_23"]}/>
  const htmlParagraph24 = <HtmlText text={text[author][chapter]["paragraph_24"]}/>
  const htmlParagraph25 = <HtmlText text={text[author][chapter]["paragraph_25"]}/>

  const htmlEnglishParagraph1 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_1"]}/>
  const htmlEnglishParagraph2 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_2"]}/>
  const htmlEnglishParagraph3 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_3"]}/>
  const htmlEnglishParagraph4 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_4"]}/>
  const htmlEnglishParagraph5 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_5"]}/>
  const htmlEnglishParagraph6 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_6"]}/>
  const htmlEnglishParagraph7 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_7"]}/>
  const htmlEnglishParagraph8 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_8"]}/>
  const htmlEnglishParagraph9 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_9"]}/>
  const htmlEnglishParagraph10 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_10"]}/>
  const htmlEnglishParagraph11 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_11"]}/>
  const htmlEnglishParagraph12 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_12"]}/>
  const htmlEnglishParagraph13 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_13"]}/>
  const htmlEnglishParagraph14 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_14"]}/>
  const htmlEnglishParagraph15 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_15"]}/>
  const htmlEnglishParagraph16 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_16"]}/>
  const htmlEnglishParagraph17 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_17"]}/>
  const htmlEnglishParagraph18 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_18"]}/>
  const htmlEnglishParagraph19 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_19"]}/>
  const htmlEnglishParagraph20 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_20"]}/>
  const htmlEnglishParagraph21 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_21"]}/>
  const htmlEnglishParagraph22 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_22"]}/>
  const htmlEnglishParagraph23 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_23"]}/>
  const htmlEnglishParagraph24 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_24"]}/>
  const htmlEnglishParagraph25 = <HtmlEnglishText text={textEnglish[author][chapter]["paragraph_25"]}/>

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

  //console.log(stringParagraph1)

  return (
    <div className={styles.container}>
      <button onClick={() => { setEnglishText(!englishText) }}>English Text</button>
      <div>
        <div>{ParagraphTemplate(stringParagraph1, stringEnglishParagraph1, buttonText1, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph2, stringEnglishParagraph2, buttonText2, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph3, stringEnglishParagraph3, buttonText3, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph4, stringEnglishParagraph4, buttonText4, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph5, stringEnglishParagraph5, buttonText5, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph6, stringEnglishParagraph6, buttonText6, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph7, stringEnglishParagraph7, buttonText7, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph8, stringEnglishParagraph8, buttonText8, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph9, stringEnglishParagraph9, buttonText9, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph10, stringEnglishParagraph10, buttonText10, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph11, stringEnglishParagraph11, buttonText11, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph12, stringEnglishParagraph12, buttonText12, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph13, stringEnglishParagraph13, buttonText13, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph14, stringEnglishParagraph14, buttonText14, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph15, stringEnglishParagraph15, buttonText15, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph16, stringEnglishParagraph16, buttonText16, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph17, stringEnglishParagraph17, buttonText17, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph18, stringEnglishParagraph18, buttonText18, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph19, stringEnglishParagraph19, buttonText19, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph20, stringEnglishParagraph20, buttonText20, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph21, stringEnglishParagraph21, buttonText21, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph22, stringEnglishParagraph22, buttonText22, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph23, stringEnglishParagraph23, buttonText23, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph24, stringEnglishParagraph24, buttonText24, englishText)}</div>
        <div>{ParagraphTemplate(stringParagraph25, stringEnglishParagraph25, buttonText25, englishText)}</div>
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
