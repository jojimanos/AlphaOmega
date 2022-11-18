export default function htmlEnglishText({ newtest }, props) {

    const { authorEnglish, chapter, paragraph } = props

    const text = <p>{newtest.map((x) => (<li><h2>{x?.[authorEnglish]?.[chapter]?.[paragraph]}</h2></li>))}</p>

    return (
        text
    )
}