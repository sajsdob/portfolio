import React, { Component } from 'react';
import deleteimg from '../../assets/delete.png' 




class Done extends Component {

constructor(props){
  super(props);
}

  render(){
    const {done,deletedone} = this.props;
    return(
      <ul>
        <h1 className = 'done'>DONE: </h1>
        {done.map((item, index)=><li key={index}><div>{item} 
        <br/>
        <span>✔</span>
        </div> 
        <img className='delete' onClick={(e)=>deletedone(index)} src={deleteimg}/></li>)}
      </ul>
    )
  }
}



export default Done