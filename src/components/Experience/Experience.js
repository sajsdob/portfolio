

import React, { Component } from 'react';
import './Experience.scss';


class Experience extends Component {

  constructor(props) {
    super(props);
    this.state = {
      margin: 'one'
    }
  }

  //METHODS

  changinginput = (input) => {
    this.setState({
      userinput: input
    })
  };

  changeMargin = (e) => {
    let margin = e.target.getAttribute('value')
    this.setState({
      margin: margin
    })
  }
  

  render() {
    return (
<div className='skill-container' id='education'>
<ul>
  <li onClick={this.changeMargin} value='one'  >One</li>
  <li onClick={this.changeMargin} value='two'  >Two</li>
  <li onClick={this.changeMargin} value='three' >Three</li>
  <li onClick={this.changeMargin} value='four' >Four</li>
  <hr className={this.state.margin} />
  <hr className='long' />
</ul>
</div>
    )
  }
}

export default Experience