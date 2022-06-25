import React, {Component} from 'react';
import Link from 'next/link';

class Gosp_tem extends Component {

    state = {
            id: this.props.id, 
            title: this.props.title, 
            trans: this.props.trans, 
            linkto: this.props.linkto
    }
     
    render() { 
        return (
            <div className='text-3xl text-center m-3'>
                <Link href={this.state.linkto}><div><p>{this.state.trans}</p><p>{this.state.id}{this.state.title}</p></div></Link>
                </div>
        );
    }
}

export default Gosp_tem;