import React, { Component } from 'react';




class Done extends Component {

constructor(props){
  super(props);
}

  render(){
    const {done,deletedone} = this.props;
    return(
      <ul>
        <h1 className = 'done'>DONE: </h1>
        {done.map((item, index)=><li key={index}>{item}    <span>✔</span>
        <button className='delete' onClick={(e)=>deletedone(index)} > DELETE </button></li>)}
      </ul>
    )
  }
}



export default Done