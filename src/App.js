import React, { Component } from 'react';
import './App.scss';
import Footer from './components/Footer/Footer.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarClass: 'sidebarIn',
      sideBarOut: false,
      sidebarClassLineOne: 'line1',
      sidebarClassLineTwo: 'line2',
      sidebarClassLineThree: 'line3'
    }
  }


  changeSideBarClass = () => {
    if (!this.state.sideBarOut) {
      this.setState({
        sidebarClassLineOne: 'line1out',
        sidebarClassLineTwo: 'line2out',
        sidebarClassLineThree: 'line3out',
        sideBarOut: true,
      })
    }
    else {
      this.setState({
        sidebarClassLineOne: 'line1',
        sidebarClassLineTwo: 'line2',
        sidebarClassLineThree: 'line3',
        sideBarOut: false,
      })
    }
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
        <Footer changeSideBarClass={this.changeSideBarClass}
          hamburgerToggle={this.hamburgerToggle}
          sideBarOut={this.state.sideBarOut}
          sidebarClassLineOne={this.state.sidebarClassLineOne}
          sidebarClassLineTwo={this.state.sidebarClassLineTwo}
          sidebarClassLineThree={this.state.sidebarClassLineThree}
        />
        <Sidebar
          hamburgerToggle={this.hamburgerToggle}
          sideBarOut={this.state.sideBarOut}
          sidebarClassLineOne={this.state.sidebarClassLineOne}
          sidebarClassLineTwo={this.state.sidebarClassLineTwo}
          sidebarClassLineThree={this.state.sidebarClassLineThree}
          changeSideBarClass={this.changeSideBarClass} sidebarClass={this.state.sidebarClass}
        />
        <div className='container'>
          <About />
          <Projects />
          <div id='education'></div>
        </div>
      </div>
    )
  }
}



export default App;