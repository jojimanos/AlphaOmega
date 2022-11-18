import reactElementToJSXString from 'react-element-to-jsx-string';

export default function htmlToString(props: JSX.Element) {
    let text
    return (text = reactElementToJSXString(props))
}