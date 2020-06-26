import React, { Component } from 'react';
import './About.scss';
import face from '../../assets/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({ duration: 900 });


class About extends Component {

      constructor(props) {
        super(props);
      }

    componentDidMount() {
     this.props.hideSide()
    }


    render() {
        return (
            <div data-aos="fade-in" className="About">
                <div>
                    <h1>HELLO, MY NAME IS</h1>
                    <h2>Slawomir</h2>
                    <h2 >Bialynicki - Birulo.</h2>
                    <div data-aos="flip-right" className='line'></div>
                    <div  data-aos="fade-up">
                        <p>I'm an aspiring front-end developer based in Poznań, POLAND. I'm specializing in building websites, web applications and everything in between.</p>
                    </div>
                    <div  data-aos="fade-up" className='contact-me'>
                        <a  href='mailto: sajsdob@gmail.con'>REACH OUT</a>
                    </div>
                </div>
                <img data-aos-delay ='200' data-aos="zoom-in" src={face}></img>
            </div>
        )
    }
}



export default About;