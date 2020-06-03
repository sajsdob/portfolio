import React from 'react';
import './Footer.scss'

function Footer() {
    return (
      <nav className='nav-bar'>
          <ol className='nav-list'>
              <li><a href='/#about'>ABOUT ME</a></li>
              <li><a href='/#projects'>PROJECTS</a></li>
              <li><a href='/#education'>EDUCATION</a></li>
          </ol>
          <div className='menu'>
            <div className='lines'></div>
            <div className='lines'></div>
            <div className='lines'></div>
          </div>
      </nav>
    );
  }

  export default Footer;