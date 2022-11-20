import { connectToDatabase } from "../../util/mongodb";
import styles from "../../styles/Home.module.css";
import HtmlEnglishText from "../components/htmlEnglishText"
import ParagraphTemplate from "../components/paragraph_template";
import { useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import dynamic from 'next/dynamic'

const HtmlText = dynamic(() => import('../components/htmlText'), {
  ssr: false,
})


export default function Chapter1({ newtest }: any) {

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


  const author: string = "mathew"
  const authorEnglish: string = "mathew_english"
  const chapter: string = "chapter_1"

  const htmlParagraph1 = <HtmlText newtest={{ newtest }} />
  //const htmlParagraph2 = HtmlText({ newtest }, { author, chapter, paragraph: 2 })
  //const htmlParagraph3 = HtmlText({ newtest }, { author, chapter, paragraph: 3 })
  //const htmlParagraph4 = HtmlText({ newtest }, { author, chapter, paragraph: 4 })
  //const htmlParagraph5 = HtmlText({ newtest }, { author, chapter, paragraph: 5 })
  //const htmlParagraph6 = HtmlText({ newtest }, { author, chapter, paragraph: 6 })
  //const htmlParagraph7 = HtmlText({ newtest }, { author, chapter, paragraph: 7 })
  //const htmlParagraph8 = HtmlText({ newtest }, { author, chapter, paragraph: 8 })
  //const htmlParagraph9 = HtmlText({ newtest }, { author, chapter, paragraph: 9 })
  //const htmlParagraph10 = HtmlText({ newtest }, { author, chapter, paragraph: 10 })
  //const htmlParagraph11 = HtmlText({ newtest }, { author, chapter, paragraph: 11 })
  //const htmlParagraph12 = HtmlText({ newtest }, { author, chapter, paragraph: 12 })
  //const htmlParagraph13 = HtmlText({ newtest }, { author, chapter, paragraph: 13 })
  //const htmlParagraph14 = HtmlText({ newtest }, { author, chapter, paragraph: 14 })
  //const htmlParagraph15 = HtmlText({ newtest }, { author, chapter, paragraph: 15 })
  //const htmlParagraph16 = HtmlText({ newtest }, { author, chapter, paragraph: 16 })
  //const htmlParagraph17 = HtmlText({ newtest }, { author, chapter, paragraph: 17 })
  //const htmlParagraph18 = HtmlText({ newtest }, { author, chapter, paragraph: 18 })
  //const htmlParagraph19 = HtmlText({ newtest }, { author, chapter, paragraph: 19 })
  //const htmlParagraph20 = HtmlText({ newtest }, { author, chapter, paragraph: 20 })
  //const htmlParagraph21 = HtmlText({ newtest }, { author, chapter, paragraph: 21 })
  //const htmlParagraph22 = HtmlText({ newtest }, { author, chapter, paragraph: 22 })
  //const htmlParagraph23 = HtmlText({ newtest }, { author, chapter, paragraph: 23 })
  //const htmlParagraph24 = HtmlText({ newtest }, { author, chapter, paragraph: 24 })
  //const htmlParagraph25 = HtmlText({ newtest }, { author, chapter, paragraph: 25 }

  const htmlEnglishParagraph1 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 1 })
  const htmlEnglishParagraph2 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 2 })
  const htmlEnglishParagraph3 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 3 })
  const htmlEnglishParagraph4 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 4 })
  const htmlEnglishParagraph5 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 5 })
  const htmlEnglishParagraph6 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 6 })
  const htmlEnglishParagraph7 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 7 })
  const htmlEnglishParagraph8 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 8 })
  const htmlEnglishParagraph9 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 9 })
  const htmlEnglishParagraph10 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 10 })
  const htmlEnglishParagraph11 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 11 })
  const htmlEnglishParagraph12 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 12 })
  const htmlEnglishParagraph13 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 13 })
  const htmlEnglishParagraph14 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 14 })
  const htmlEnglishParagraph15 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 15 })
  const htmlEnglishParagraph16 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 16 })
  const htmlEnglishParagraph17 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 17 })
  const htmlEnglishParagraph18 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 18 })
  const htmlEnglishParagraph19 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 19 })
  const htmlEnglishParagraph20 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 20 })
  const htmlEnglishParagraph21 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 21 })
  const htmlEnglishParagraph22 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 22 })
  const htmlEnglishParagraph23 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 23 })
  const htmlEnglishParagraph24 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 24 })
  const htmlEnglishParagraph25 = HtmlEnglishText({ newtest }, { authorEnglish, chapter, paragraph: 25 })

  const stringParagraph1 = htmlToString(htmlParagraph1);
  //const stringParagraph2 = htmlToString(htmlParagraph2);
  //const stringParagraph3 = htmlToString(htmlParagraph3);
  //const stringParagraph4 = htmlToString(htmlParagraph4);
  //const stringParagraph5 = htmlToString(htmlParagraph5);
  //const stringParagraph6 = htmlToString(htmlParagraph6);
  //const stringParagraph7 = htmlToString(htmlParagraph7);
  //const stringParagraph8 = htmlToString(htmlParagraph8);
  //const stringParagraph9 = htmlToString(htmlParagraph9);
  //const stringParagraph10 = htmlToString(htmlParagraph10);
  //const stringParagraph11 = htmlToString(htmlParagraph11);
  //const stringParagraph12 = htmlToString(htmlParagraph12);
  //const stringParagraph13 = htmlToString(htmlParagraph13);
  //const stringParagraph14 = htmlToString(htmlParagraph14);
  //const stringParagraph15 = htmlToString(htmlParagraph15);
  //const stringParagraph16 = htmlToString(htmlParagraph16);
  //const stringParagraph17 = htmlToString(htmlParagraph17);
  //const stringParagraph18 = htmlToString(htmlParagraph18);
  //const stringParagraph19 = htmlToString(htmlParagraph19);
  //const stringParagraph20 = htmlToString(htmlParagraph20);
  //const stringParagraph21 = htmlToString(htmlParagraph21);
  //const stringParagraph22 = htmlToString(htmlParagraph22);
  //const stringParagraph23 = htmlToString(htmlParagraph23);
  //const stringParagraph24 = htmlToString(htmlParagraph24);
  //const stringParagraph25 = htmlToString(htmlParagraph25);

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

  console.log(stringParagraph1)

  return (
    <div className={styles.container}>
      <button onClick={() => { setEnglishText(!englishText) }}>English Text</button>
      <div suppressHydrationWarning>
        <div suppressHydrationWarning>{ParagraphTemplate(stringParagraph1, stringEnglishParagraph1, buttonText1, englishText)}</div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
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
