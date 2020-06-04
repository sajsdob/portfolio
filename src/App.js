import React, {Component} from 'react';
import './App.scss';
import Footer from './components/Footer/Footer.js';
import Sidebar from './components/Sidebar/Sidebar.js';


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        sidebarClass: 'sidebarIn'
      }
  }

  changeSideBarClass = () => {
    if(this.state.sidebarClass==='sidebarIn'){
      this.setState({
        sidebarClass: 'sidebarOut'
      })
    }
    else {
      this.setState({
        sidebarClass: 'sidebarIn'
      })
    }
  }

  render() {
      return (
        <div className="App">
        <Footer changeSideBarClass = {this.changeSideBarClass}/>
        <Sidebar sidebarClass = {this.state.sidebarClass}/>
        <div id='about'>fawfawfafawfawfawfnawli iawh oaiwhf awiofh awoifh ioawphfip a</div>
        <div id='projects'></div>
        <div id='education'></div>
     </div>
      )
  }
}



export default App;