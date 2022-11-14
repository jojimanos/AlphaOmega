import jsxToString from "jsx-to-string";

export default function htmlToString(props: any) {
    let text: any
    return (text = jsxToString(props))
}