import React, { Component } from 'react';
import './About.scss';


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
                <h3>I'm an aspiring front-end developer.</h3>
                <div>
                    <p>I'm a future developer based in Poznań, POLAND. I'm specializing in building websites and everything in between.</p>
                </div>
                <div className='contact-me'>
                    <a href='mailto: sajsdob@gmail.con'>REACH OUT</a>
                </div>
            </div>
        )
    }
}



export default About;