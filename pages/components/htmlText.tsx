export default function HtmlText({ newtest }: any, props: any) {

    const { author, chapter, paragraph } = props || {};

    const text = <div>{newtest?.map((x: any, i: any) => (<p key={i}>{x[author][chapter][paragraph]}</p>))}</div>

    //console.log(text)
    //console.log(author)

    return (
        text
    )
}