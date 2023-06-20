import { useState } from "react";
import clickableWords from "./clickableWords";
import MediaQuery from "react-responsive";
import simpleWords from "./simpleWords";

export default function ParagraphTemplate(
  stringParagraph: string,
  stringEnglishParagraph: string,
  buttonText: string,
  englishText: boolean
) {
  const [paragraph, setParagraph] = useState<boolean | undefined>(true);

  function onclick(setParagraph: Function, paragraph: boolean | undefined) {
    setParagraph(!paragraph);
  }

  const greek = clickableWords(stringParagraph);

  const english = simpleWords(stringEnglishParagraph);

  return (
    <div>
      <MediaQuery minWidth={641}>
        <div className="flex flex-row">
          <button
            className="basis-1/4 hover:text-blue-800 hover:border-2"
            onClick={() => onclick(setParagraph, paragraph)}
          >
            {buttonText}
          </button>
          {paragraph && (
            <div className="font-serif text-justify basis-2/4 px-2">
              {greek}
            </div>
          )}
          {paragraph && englishText && (
            <div className="font-serif text-justify basis-2/4 px-2">
              {english}
            </div>
          )}
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={640}>
        <div className="grid grid-rows-3">
          <button
            className="basis-1/4 hover:text-blue-800 hover:border-2"
            onClick={() => onclick(setParagraph, paragraph)}
          >
            {buttonText}
          </button>
          {paragraph && (
            <div className="font-serif text-justify basis-2/4 py-2">
              {greek}
            </div>
          )}
          {paragraph && englishText && (
            <div className="font-serif text-justify basis-2/4 py-2">
              {english}
            </div>
          )}
        </div>
      </MediaQuery>
    </div>
  );
}
