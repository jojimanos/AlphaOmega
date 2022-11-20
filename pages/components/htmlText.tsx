export default function HtmlText(props: any) {

    const { newtest, author, chapter, paragraph } = props || {};

    const text = <div>{newtest[author][chapter][paragraph]}</div>

    console.log(text)
    //console.log(author)

    return (
        text
    )
}