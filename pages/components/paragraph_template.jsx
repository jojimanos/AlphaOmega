import { useState } from "react"
import clickableWords from "./clickableWords"

export default function paragraphTemplate(stringParagraph, stringEnglishParagraph, buttonText, englishText) {

    const [paragraph, setParagraph] = useState(true)

    function onclick(setParagraph, paragraph) { setParagraph(!paragraph) }

    return (
        <div>
          <button onClick={() => onclick(setParagraph, paragraph)}>{buttonText}</button>
          <div>{clickableWords(stringParagraph)}</div>
          <div>{clickableWords(stringEnglishParagraph)}</div>
        </div>
    )
}