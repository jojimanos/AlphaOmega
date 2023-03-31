import styles from "../../../../styles/Home.module.css";
import ParagraphTemplate from "../../../components/paragraph_template";
import { useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import data from "../../../../data/greek_text.json";
import dataEnglish from "../../../../data/english_text.json";
import dynamic from "next/dynamic";

export default function Chapter1() {
  const HtmlText = dynamic(() => import("../../../components/htmlText"));

  const HtmlEnglishText = dynamic(
    () => import("../../../components/htmlEnglishText")
  );

  const newtest = JSON.parse(JSON.stringify(data));

  const text = newtest;

  const newtestEnglish = JSON.parse(JSON.stringify(dataEnglish));

  const textEnglish = newtestEnglish;

  const author: string = "mathew";
  const chapter: string = "chapter_5";
  const authorEnglish: string = "mathew_english";

  const [englishText, setEnglishText] = useState(false);

  function htmlToString(props: JSX.Element): string {
    let text: string;
    return (text = reactElementToJSXString(props));
  }

  const array = text[author][chapter]["array"];

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          setEnglishText(!englishText);
        }}
      >
        English Text
      </button>
      <div>
        {array.map((a: string) => (
          <div>
            {ParagraphTemplate(
              htmlToString(
                <HtmlText text={text[author][chapter][`paragraph_${a}`]} />
              ),
              htmlToString(
                <HtmlEnglishText
                  text={textEnglish[author][chapter][`paragraph_${a}`]}
                />
              ),
              `${a}`,
              englishText
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
