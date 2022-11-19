import reactElementToJSXString from 'react-element-to-jsx-string';

function htmlToString(props: JSX.Element): string {
    let text
    return (text = reactElementToJSXString(props))
}

export default htmlToString