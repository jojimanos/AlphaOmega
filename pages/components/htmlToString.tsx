import reactElementToJSXString from 'react-element-to-jsx-string';

function htmlToString(props: JSX.Element) {
    let text
    return (text = reactElementToJSXString(props))
}

export default htmlToString