import React, { useState } from 'react';
import './Skaterreveal.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import location from '../../assets/location.png';



AOS.init({ duration: 800 });

const api = {
    key: "3dbbfca50d3674cc4510970916791fb0",
    base: "https://api.openweathermap.org/data/2.5/",
    proxyUrl: 'http://cors-anywhere.herokuapp.com/'
}

function Skaterreveal() {



    return (
        <div data-aos="slide-down" className='app'>
            <h1>SKATER REVEAL GAME</h1>
            <h2>Check out a game I've created for iOS and Android:</h2>
            <img id='skatesperm' src=''></img>
            <h1>It's only $0.99</h1>
            <div>
                <div><img src=''></img></div>
                <div><img src=''></img></div>
            </div>
        </div>
    );
}

export default Skaterreveal;



