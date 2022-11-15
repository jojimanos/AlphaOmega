export default function htmlText({ newtest }, props) {

    const { author, chapter, paragraph } = props

    const text = <p>{newtest.map((x) => (<li><h2>{x[author][chapter][paragraph]}</h2></li>))}</p>

    return (
        text
    )
}