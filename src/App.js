import React, { Component, useEffect, useLocation } from 'react';
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
import Experience from './components/Experience/Experience.js';
import Email from './components/Email/Email.js';
import Social from './components/Social/Social.js';
import Tiktaktoe from './components/Spotifyapp/Tiktaktoe.js';
import Grades from './components/Grades/Grades.js';
import MySkills from './components/MySkills/MySkills.js';
import Memorygame from './components/Memorygame/Memorygame.js';
import Metronome from './components/Metronome/Metronome.js';
import Skaterreveal from './components/Skaterreveal/Skaterreveal.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarClass: 'sidebarIn',
      sideBarOut: false,
      sidebarClassLineOne: 'line1',
      sidebarClassLineTwo: 'line2',
      sidebarClassLineThree: 'line3',
      margin: 'one'
    }
  }


  onDragStart = () => {
    console.log('start');

  }

  dragOver = () => {
    console.log('dragover');

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

  hideSide = () => {
    if (this.state.sidebarClass === 'sidebarOut') {
      this.setState({
        sidebarClass: 'sidebarIn',
        sidebarClassLineOne: 'line1',
        sidebarClassLineTwo: 'line2',
        sidebarClassLineThree: 'line3',
        sideBarOut: false,
      })
      document.body.style.overflow = "visible"
    }
  };




  render() {
    return (
      <Router>
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
          <div className='App'>
{/* 
            <label class="switch">
              <input type="checkbox" />
              <span class="slider"></span>
            </label> */}
            <Switch>
              <Route path='/' exact={true}>
                <div className='main'>
                  <About hideSide={this.hideSide} sidebarClass={this.state.sidebarClass} />
                  <Projects />
                  <Experience />
                  <MySkills />
                </div>
              </Route>
              <Route path='/Todoapp' component={Todoapp} />
              <Route path='/Weatherapp' component={Weatherapp} />
              <Route path='/Tiktaktoe' component={Tiktaktoe} />
              <Route path='/Grades' component={Grades} />
              <Route path='/Memorygame' component={Memorygame} />
              <Route path='/Metronome' component={Metronome} />
              <Route path='/Skaterreveal' component={Skaterreveal} />
            </Switch>
          </div>
          {/* <div className='form'>
            <input type='text' className='testinput' required />
            <label className='testlabel'>
              <span className='testspan'>name:</span>
            </label>
          </div> */}
          {/* <div className='test'>
              <div className='test1'></div>
              <div className='test2'></div>
          </div>
          <div className='test'>
              <div className='test1'></div>
              <div className='test2'></div>
          </div> */}
          <Skills />
          <p className='designed'>Designed & Created By: SLAWOMIR BIALYNICKI-BIRULO</p>
          <Email />
          <Social />
        </div>
      </Router>
    )
  }
}



export default App;
