export default function htmlEnglishText({ newtest }:any, props: any) {

    const { authorEnglish, chapter, paragraph } = props || {};

    const text = <div>{newtest.map((x: any, i: any) => (<h2 key={i}>{x[authorEnglish][chapter][paragraph]}</h2>))}</div>

    return (
        text
    )
}