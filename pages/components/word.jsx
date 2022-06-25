import React, {Component} from 'react';

class Word extends Component {
    state = {
        id: this.props.id,
        body: this.props.body,
        trans: this.props.trans,

    } 
    render() { 
        return (
            <div className='p-0'>
            <div className='p-3 box-border-auto rounded-full text-white 
            hover:text-black hover:bg-gray-500'>{this.state.trans}
            <div className='text-black bg-white'>{this.state.body}</div>
            </div>
            </div>);
    }
}
 
export default Word;