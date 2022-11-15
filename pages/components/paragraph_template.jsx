import { useState } from "react"
import clickableWords from "./clickableWords"

export default function paragraphTemplate(stringParagraph) {

    const [paragraph, setParagraph] = useState(true)

    function onclick(setParagraph, paragraph) { setParagraph(!paragraph) }

    return (
        <div className="grid grid-cols-3">
          <button onClick={() => onclick(setParagraph, paragraph)}>Paragraph 3</button>
          {paragraph && <div className="App font-serif text-justify">{clickableWords(stringParagraph)}</div>}
        </div>
    )
}