import React, { useState } from 'react';
import './Skaterreveal.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import location from '../../assets/location.png';
import sperm from '../../assets/icon.png';
import play from '../../assets/play.png';
import apple from '../../assets/apple.png';



AOS.init({ duration: 800 });

const api = {
    key: "3dbbfca50d3674cc4510970916791fb0",
    base: "https://api.openweathermap.org/data/2.5/",
    proxyUrl: 'http://cors-anywhere.herokuapp.com/'
}

function Skaterreveal() {



    return (
        <div data-aos="slide-down" className='app'>
            <div id='head'>
            <h1>SKATER REVEAL GAME</h1>
            <h2>Check out a game I've created for iOS and Android:</h2>
            </div>
            <img id='sperm' src={sperm} alt="Sperm" />
            <div id="buttons">
                 <a href="https://apps.apple.com/app/skater-reveal/id6451123162" target="_blank">
                  <img  class="storeButton"  width="200" src={apple} alt="App Store"/>
                 </a>
          
                 <a href="https://play.google.com/store/apps/details?id=com.sajsdob.SkaterReveal" target="_blank">
                   <img  class="storeButton"   img width="200" src={play} alt="Google Play Store"/>
                 </a>
             </div>
            <h1 id='price'>It's only $0.99 😉</h1>

        </div>
    );
}

export default Skaterreveal;



