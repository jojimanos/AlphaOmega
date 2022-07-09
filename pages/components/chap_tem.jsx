import React, {Component} from 'react';
import Link from 'next/link'

class Chap_tem extends Component {
    state = { 
        id: this.props.id,
        title: this.props.title,
        trans: this.props.trans,
        linkto: this.props.linkto
     } 
    render() { 
        return (
            <div className='text-center m-3'>
                <Link href={this.state.linkto}>
                    <div>
                    <p className='text-1xl'>{this.state.trans}</p>
                    <p className='text-3xl'>{this.state.id} {this.state.title}</p>
                    </div>                
                </Link>
            </div>
        );
    }
}
 
export default Chap_tem;