export default function htmlText({ newtest }: any, props: any) {

    const { author, chapter, paragraph } = props || {};

    const text = <p>{newtest?.map((x: any) => (<li><h2>{x[author][chapter][paragraph]}</h2></li>))}</p>

    return (
        text
    )
}