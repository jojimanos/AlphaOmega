import React, {Component} from 'react';
import Gosp_tem from './/components/gosp_tem'
import Navbar from "./components/navbar";
import styles from '../styles/Home.module.css'

class Gosp extends Component {
    
    state = {entries: [
            {id:1, title:"Κατὰ Ματαθαῖον", trans:"Mathew", linkto:"/chapmath"},
            {id:2, title:"Κατὰ Μάρκον", trans:"Mark", linkto:"/"},
            {id:3, title:"Κατὰ Λουκάν", trans:"Luke", linkto:"/"},
            {id:4, title:"Κατὰ Κατὰ Ἰωάννην", trans:"John", linkto:"/"}
        ]
    } 
    render() { 
        return (     
        <div className={styles.container}>
        <Navbar/>
        <div className='grid grid-cols-2 grid-rows-2'>    
        {this.state.entries.map(entry=> 
        <Gosp_tem key={entry.id} id={entry.id} title={entry.title} trans={entry.trans} linkto={entry.linkto}/>)}</div>
        </div>
        )
    }
}
 
export default Gosp;