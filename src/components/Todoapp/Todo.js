import React, { Component } from 'react';
import edit from '../../assets/edit.png';
import done from '../../assets/done.png';
import deleteimg from '../../assets/delete.png' 



class Todo extends Component {

constructor(props){
  super(props);
}
  render(){
    const {setChangedIndex, items, deleted, addToDone} = this.props;
    return(
      <ul>
        <h1 className = 'todo'>TO DO: </h1>
        {items.map((item, index)=><li className = 'nie' key={index}><div>{item}</div> <br/>
        {/* <button > DONE </button>  */}
        {/* <button className='delete' onClick={(e)=>deleted(index)}> DELETE </button> */}
        {/* <button  >EDIT</button> */}
        <img className='edit'onClick={()=>setChangedIndex(index)} src={edit}/>
        <img className='add-to-done' onClick={(e)=>addToDone(item, index)} src={done}/>
        <img className='delete' onClick={(e)=>deleted(index)} src={deleteimg}/>
        </li>)}
      </ul>
    )
  }
}


export default Todo