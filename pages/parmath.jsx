import React, {Component} from 'react';
import Word from './/components/word'
import Navbar from './components/navbar';
import styles from '../styles/Home.module.css'

class Parmath extends Component {
    state = { entries1: [
        {id: 1, body: "ΒΙΒΛΟΣ", trans: "book"},
        {id: 2, body: "γενέσεως", trans: "birth"},
        {id: 3, body: "Ἰησοῦ", trans: "Jesus"},
        {id: 4, body: "Χριστοῦ", trans: "Christ"},
        {id: 5, body: "υἰοῦ", trans: "son"},
        {id: 6, body: "Δαυεὶδ", trans: "David"},
        {id: 7, body: "υἰοῦ", trans: "son"},
        {id: 8, body: "Ἀβραάμ", trans: "Abraham"}
    ],
    entries2: [
        {id: 1, body: "Ἀβραὰμ", trans: "book"},
        {id: 2, body: "ἐγέννησεν", trans: "birth"},
        {id: 3, body: "τὸν", trans: "Jesus"},
        {id: 4, body: "Ἰσαάκ,", trans: "Christ"},
        {id: 5, body: "Ἰσαὰκ", trans: "son"},
        {id: 6, body: "δὲ", trans: "David"},
        {id: 7, body: "ἐγέννησεν", trans: "son"},
        {id: 8, body: "τὸν", trans: "Abraham"},
        {id: 9, body: "Ἰακώβ,", trans: "Abraham"},
        {id: 10, body: "δὲ", trans: "Abraham"},
        {id: 11, body: "ἐγέννησεν", trans: "Abraham"},
        {id: 12, body: "Ἰούδαν", trans: "Abraham"},
        {id: 13, body: "καὶ", trans: "Abraham"},
        {id: 14, body: "τοὺς", trans: "Abraham"},
        {id: 15, body: "ἀδελφοὺς", trans: "Abraham"},
        {id: 16, body: "αὐτοῦ,", trans: "Abraham"}
    ]
        } 
    render() { 
        return <div className={styles.container}>
            <Navbar/>
        <div className='grid grid-rows-2 gap-3'><pre className='grid grid-cols-8 gap-1 text-center'>{this.state.entries1.map(entry => 
            <Word id={entry.id} body={entry.body} trans={entry.trans}/>)}</pre>
            <pre className='grid grid-cols-8 gap-1 text-center'>{this.state.entries2.map(entry => 
            <Word id={entry.id} body={entry.body} trans={entry.trans}/>)}</pre></div>;            
    </div>
    }
}
 
export default Parmath;