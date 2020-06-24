import React, { useState, useEffect } from 'react';
import './Experience.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({ duration: 900 });

const Experience = () => {
    const [margin, setMargin] = useState('one');

    const changeMargin = (e) => {
        let margin = e.target.getAttribute('value')
        setMargin(margin)
    }

    return (
        <div className='skill-container' id='education'>
            <h2>HERE IS MY JOB EXPIERIENCE SO FAR:</h2>
            <ul data-aos='fade-in'>
                <li onClick={changeMargin} value='one'  >ACI <br/> Europe</li>
                <li onClick={changeMargin} value='two'  >Skateaholic Apparel</li>
                <li onClick={changeMargin} value='three' >Frosch <br/> Media</li>
                <li onClick={changeMargin} value='four' >Alphanumeric Systems</li>
                <hr className={margin} />
                <hr className='long' />
            </ul>
            <div>
            <h3 data-aos-delay='300' data-aos='fade-up'>Sales Delegate Executive</h3>
            <h1 data-aos-delay='400' data-aos='fade-up'>2013-2014</h1>
            </div>

        </div>
    )

}

export default Experience