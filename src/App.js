import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js';
import Todoapp from './components/Todoapp/Todoapp.js';
import Weatherapp from './components/Weatherapp/Weatherapp.js';
import Skills from './components/Skills/Skills.js';


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
      <Router>
        
          <div className='App'>
          
            <Footer  changeSideBarClass={this.changeSideBarClass}
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
            <Switch>
            <Route path='/' exact = {true}>
            <div className='container'>
              <About />
              <Projects />
              <div id='education'></div>
            </div>
            </Route>
            <Route path='/Todoapp' component={Todoapp} />
            <Route path='/Weatherapp' component={Weatherapp} />
            </Switch>
            <Skills />
            <p className='designed'>Designed & Created By: SLAWOMIR BIALYNICKI-BIRULO</p>
          </div>
        
      </Router>
    )
  }
}



export default App;