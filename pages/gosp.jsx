import React, {Component} from 'react';
import Gosp_tem from './/components/gosp_tem'

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
        <div>{this.state.entries.map(entry=> 
        <Gosp_tem key={entry.id} id={entry.id} title={entry.title} trans={entry.trans} linkto={entry.linkto}/>)}</div>
        )
    }
}
 
export default Gosp;