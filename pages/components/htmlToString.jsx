import reactElementToJSXString from 'react-element-to-jsx-string';

export default function htmlToString(props) {
    let text
    return (text = reactElementToJSXString(props))
}