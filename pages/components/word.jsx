import React, {Component} from 'react';
import Navbar from './navbar';

class Word extends Component {
    state = {
        id: this.props.id,
        body: this.props.body,
        trans: this.props.trans,

    } 
    render() { 
        return (
            <div className='p-0'>
            <div className='text-sm p-3 box-border-auto rounded-full text-white 
            hover:text-black'>{this.state.trans}
            <div className='text-base text-black bg-white'>{this.state.body}</div>
            </div>
            </div>);
    }
}
 
export default Word;