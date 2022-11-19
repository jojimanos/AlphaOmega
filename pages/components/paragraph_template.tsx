import { useState } from "react"
import clickableWords from "./clickableWords"

export default function paragraphTemplate(stringParagraph: string, stringEnglishParagraph: string, buttonText: string, englishText: boolean) {

    const [paragraph, setParagraph] = useState(true)

    function onclick(setParagraph: Function, paragraph: boolean) { setParagraph(!paragraph) }

    return (
        <div className="flex flex-row" >
          <button className="basis-1/4" onClick={() => onclick(setParagraph, paragraph)}>{buttonText}</button>
          {paragraph && <div className="font-serif text-justify basis-2/4">{stringParagraph}</div>}
          {paragraph && englishText && <div className="font-serif text-justify basis-2/4">{clickableWords(stringEnglishParagraph)}</div>}
        </div>
    )
}