export default function htmlText({ newtest }, props) {

    const text = <p>{newtest.map((x) => (<li><h2>{x[props]}</h2></li>))}</p>

    return (
    text
    )
}