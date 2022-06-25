import React, {Component} from 'react';
import Link from 'next/link';

class Chap_tem extends Component {
    state = { 
        id: this.props.id,
        title: this.props.title,
        trans: this.props.trans,
        linkto: this.props.linkto
     } 
    render() { 
        return (
            <div className='text-3xl text-center m-3'><a href={this.state.linkto}><p>{this.state.trans}</p>
            <p>{this.state.id}{this.state.title}</p></a></div>
        );
    }
}
 
export default Chap_tem;