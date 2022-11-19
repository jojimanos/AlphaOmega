export default function htmlText({ newtest }: any, props: any) {

    const { author, chapter, paragraph } = props || {};

    const text = <div>{newtest?.map((x: any, i: any) => (<h2 key={i}>{x[author][chapter][paragraph]}</h2>))}</div>

    return (
        text
    )
}