import React, { Component } from 'react';



class Todo extends Component {

constructor(props){
  super(props);
}
  render(){
    const {items, deleted, addToDone} = this.props;
    return(
      <ul>
        <h1 className = 'todo'>TO DO: </h1>
        {items.map((item, index)=><li className = 'nie' key={index}>{item} <br/>
        <button className='add-to-done' onClick={(e)=>addToDone(item, index)}> MOVE TO DONE </button> 
        <button className='delete' onClick={(e)=>deleted(index)}> DELETE </button>
        </li>)}
      </ul>
    )
  }
}


export default Todo