import React, { Component } from 'react';
import './App.scss';
import Footer from './components/Footer/Footer.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import About from './components/About/About.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarClass: 'sidebarIn'
    }
  }



  changeSideBarClass = () => {
    if (this.state.sidebarClass === 'sidebarIn') {
      this.setState({
        sidebarClass: 'sidebarOut'
      })
      document.body.style.overflow = "hidden"
    }
    else {
      this.setState({
        sidebarClass: 'sidebarIn'
      })
      document.body.style.overflow = "visible"
      
    }
  }

  render() {
    return (
      <div className="App">
        <Footer changeSideBarClass={this.changeSideBarClass} />
        <Sidebar sidebarClass={this.state.sidebarClass} />
        <div className='container'>
          <About />
          <div id='projects'></div>
          <div id='education'></div>
        </div>
      </div>
    )
  }
}



export default App;