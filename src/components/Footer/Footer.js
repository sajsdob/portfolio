import './Footer.scss';
import React, { Component } from 'react';


class Footer extends Component {

  constructor(props) {
    super(props);
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
      <nav ref={(nav) => { this.nav = nav }} name='top' className='nav-bar'>
        <ol className='nav-list'>
          <li><a href='/#top'>ABOUT ME</a></li>
          <li><a href='/#projects'>PROJECTS</a></li>
          <li><a href='/#education'>EDUCATION</a></li>
        </ol>
        <div onClick={this.props.changeSideBarClass} className='menu'>
          <div className={this.props.sidebarClassLineOne}></div>
          <div className={this.props.sidebarClassLineTwo}></div>
          <div className={this.props.sidebarClassLineThree}></div>
        </div>

      </nav>
    )
  }
}



export default Footer;