import React, { Component } from 'react';
import './todo.scss'


class Header extends Component {

constructor(props){
  super(props);
}
  render(){
    const {handleKeyPress, addtolist, changinginput, userinput} = this.props;
    return(
      <div  className = 'userinput'>
        <input  onKeyPress={handleKeyPress}
                placeholder='ENTER TASK'
                onChange={(e)=>changinginput(e.target.value)}
                value={userinput}
                type='text'></input>
        <div    className = 'addbutton'
                onClick={()=>addtolist(userinput)}>ADD</div>
      </div>
    )
  }
}



export default Header