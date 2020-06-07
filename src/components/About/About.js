import React, { Component } from 'react';
import './About.scss';
import face from '../../assets/logo.png'


class About extends Component {

    //   constructor(props) {
    //     super(props);
    //     this.state = {
    //       sidebarClass: 'sidebarIn'
    //     }
    //   }



    render() {
        return (
            <div className="About">
                <h1>HELLO, MY NAME IS</h1>
                <h2>Slawomir</h2>
                <h2>Bialynicki - Birulo.</h2>
                {/* <h3>-----------------------------------------------</h3> */}
                <div className='line'></div>
                <div>
                    <p>I'm an aspiring front-end developer based in Poznań, POLAND. I'm specializing in building websites, web applications and everything in between.</p>
                </div>
                <div className='contact-me'>
                    <a href='mailto: sajsdob@gmail.con'>REACH OUT</a>
                </div>
                <img src={face}></img>
            </div>
        )
    }
}



export default About;