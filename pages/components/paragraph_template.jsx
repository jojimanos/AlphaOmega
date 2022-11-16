import { useState } from "react"
import clickableWords from "./clickableWords"

export default function paragraphTemplate(stringParagraph, stringEnglishParagraph, buttonText, englishText) {

    const [paragraph, setParagraph] = useState(true)

    function onclick(setParagraph, paragraph) { setParagraph(!paragraph) }

    return (
        <div className="flex flex-row">
          <button className="basis-1/4" onClick={() => onclick(setParagraph, paragraph)}>{buttonText}</button>
          {paragraph && <div className="App font-serif text-justify basis-2/4">{clickableWords(stringParagraph)}</div>}
          {paragraph && englishText && <div className="App font-serif text-justify basis-2/4">{clickableWords(stringEnglishParagraph)}</div>}
        </div>
    )
}