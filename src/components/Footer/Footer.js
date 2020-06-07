import './Footer.scss';
import React, { Component } from 'react';


class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sideBarOut: false,
      sidebarClassLineOne: 'line1',
      sidebarClassLineTwo: 'line2',
      sidebarClassLineThree: 'line3'
    }
  }

  hamburgerToggle = () => {
    this.props.changeSideBarClass()
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
  }

  componentDidMount() {
    this.prev = window.scrollY;
    window.addEventListener('scroll', e => this.handleNavigation(e));
  }

  handleNavigation = (e) => {
    const window = e.currentTarget;

    if (this.prev > window.scrollY) {
      this.nav.style.top = "0";
    } else if (this.prev < window.scrollY) {
      this.nav.style.top = "-11vh";
    }
    this.prev = window.scrollY;
  };


  render() {
    return (
      <nav ref= {(nav)=>{this.nav = nav}} id='aboutme'  className='nav-bar'>
        <ol className='nav-list'>
          <li><a href='/#aboutme'>ABOUT ME</a></li>
          <li><a href='/#projects'>PROJECTS</a></li>
          <li><a href='/#education'>EDUCATION</a></li>
        </ol>
        <div onClick={this.hamburgerToggle} className='menu'>
          <div className={this.state.sidebarClassLineOne}></div>
          <div className={this.state.sidebarClassLineTwo}></div>
          <div className={this.state.sidebarClassLineThree}></div>
        </div>

      </nav>
    )
  }
}



export default Footer;