export default function HtmlEnglishText({ newtest }:any, props: any) {

    const { authorEnglish, chapter, paragraph } = props || {};

    const text = <div>{newtest}</div>

    //console.log(text)
    //console.log(authorEnglish)

    return (
        text
    )
}