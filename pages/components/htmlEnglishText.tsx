export default function HtmlEnglishText({ newtest }:any, props: any) {

    const { authorEnglish, chapter, paragraph } = props || {};

    const text = <div>{newtest?.map((x: any, i: any) => (<p key={i}>{x[authorEnglish][chapter][paragraph]}</p>))}</div>

    //console.log(text)
    //console.log(authorEnglish)

    return (
        text
    )
}