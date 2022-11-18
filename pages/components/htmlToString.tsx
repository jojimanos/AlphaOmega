import { ReactElement } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

export default function htmlToString(props: ReactElement) {
    let text
    return (text = reactElementToJSXString(props))
}