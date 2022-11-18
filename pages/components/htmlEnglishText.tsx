export default function htmlEnglishText({ newtest }:any, props: any) {

    const { authorEnglish, chapter, paragraph } = props

    const text = <p>{newtest.map((x: any) => (<li><h2>{x?.[authorEnglish]?.[chapter]?.[paragraph]}</h2></li>))}</p>

    return (
        text
    )
}