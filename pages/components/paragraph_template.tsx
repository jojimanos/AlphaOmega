import { useState } from "react"
import clickableWords from "./clickableWords"

export default function ParagraphTemplate(stringParagraph: string, stringEnglishParagraph: string, buttonText: string, englishText: boolean) {

  const [paragraph, setParagraph] = useState<boolean | undefined>(true);

  function onclick(setParagraph: Function, paragraph: boolean | undefined) { setParagraph(!paragraph) }
  //console.log(stringParagraph)
  //console.log(stringEnglishParagraph)

  const greek = (clickableWords(stringParagraph))

  const english = (clickableWords(stringEnglishParagraph))

  //console.log(greek)

  return (
    <div className="flex flex-row">
        <button className="basis-1/4 hover:text-blue-800 hover:border-2" onClick={() => onclick(setParagraph, paragraph)}>{buttonText}</button>
        {paragraph && <div className="font-serif text-justify basis-2/4 px-2">{greek}</div>}
        {paragraph && englishText && <div className="font-serif text-justify basis-2/4 px-2">{english}</div>}
    </div>
  )
}