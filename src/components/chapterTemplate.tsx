import React, { SetStateAction, useState } from "react";
import EnglishTextSwitch from "./englishTextSwitch";
import dynamic from "next/dynamic";
import ParagraphTemplate from "./paragraph_template";
import reactElementToJSXString from "react-element-to-jsx-string";
import data from "../../data/greek_text.json";
import dataEnglish from "../../data/english_text.json";
import styles from "../../styles/chapters.module.css";

type ChapterTemplateProps = {
  author: string;
  chapter: string;
};
const ChapterTemplate: React.FC<ChapterTemplateProps> = ({
  author,
  chapter,
}) => {
  const HtmlText = dynamic(() => import("../components/htmlText"));

  const HtmlEnglishText = dynamic(
    () => import("../components/htmlEnglishText")
  );

  const newtest = JSON.parse(JSON.stringify(data));

  const newtestEnglish = JSON.parse(JSON.stringify(dataEnglish));

  const text = newtest;

  const textEnglish = newtestEnglish;

  const [englishText, setEnglishText] = useState(false);

  function htmlToString(props: JSX.Element): string {
    let text: string;
    return (text = reactElementToJSXString(props));
  }

  const array = text[author][chapter]["array"];

  return (
    <div>
      <EnglishTextSwitch
        setEnglishText={setEnglishText}
        englishText={englishText}
      />
      <div>
        {array &&
          array.map((a: string) => (
            <div>
              {
                <ParagraphTemplate
                  stringParagraph={htmlToString(
                    <HtmlText text={text[author][chapter][`paragraph_${a}`]} />
                  )}
                  stringEnglishParagraph={htmlToString(
                    <HtmlEnglishText
                      text={textEnglish[author][chapter][`paragraph_${a}`]}
                    />
                  )}
                  buttonText={`${a}`}
                  englishText={englishText}
                />
              }
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChapterTemplate;
