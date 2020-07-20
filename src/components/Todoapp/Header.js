import React, { Component } from 'react';


class Header extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    const { handleKeyPress, addtolist, changinginput, userinput } = this.props;
    return (
      <div className='userinput'>
        <input 
          className='textinput'
          onKeyPress={handleKeyPress}
          placeholder='Enter Task'
          onChange={(e) => changinginput(e.target.value)}
          value={userinput}
          type='text'></input>
        <div className='addbutton'
          onClick={() => addtolist(userinput)}>+</div>
      </div>
    )
  }
}



export default Header