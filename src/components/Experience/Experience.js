import React, { useState } from 'react';
import './Experience.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ExperienceJson from './Experience.json';

AOS.init({ duration: 900 });

const Experience = () => {
    const [margin, setMargin] = useState('one');

    const changeMargin = (e) => {
        let margin = e.target.getAttribute('value')

        setMargin(margin)
    }

    return (
        <div className='skill-container' id='experience'>
            <h2>WHERE I'VE WORKED:</h2>
            <ul>
                <li onClick={changeMargin} value='one'>2020<br />2019</li>
                <li onClick={changeMargin} value='two'>2018<br />2016</li>
                <li onClick={changeMargin} value='three'>2016<br />2014</li>
                <li onClick={changeMargin} value='four'>2014<br />2013</li>
                <hr className={margin} />
                <hr className='long' />
            </ul>
            <div className='jobinfo'>
                <h3>{ExperienceJson[margin].position}</h3>
                <h4  data-aos-once='true' data-aos='slide-up'>{ExperienceJson[margin].company}</h4>
                {/* <img alt='link' className='link' src={link} /> */}
            </div>

        </div>
    )

}

export default Experience