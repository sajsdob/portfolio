import React, { useState } from 'react';
import './Experience.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ExperienceJson from './Experience.json';

AOS.init({ duration: 900 });

const Experience = () => {
    const [margin, setMargin] = useState('zero');

    const changeMargin = (e) => {
        let margin = e.target.getAttribute('value')

        setMargin(margin)
    }
    


    const currentDate = new Date().getFullYear()

    return (
        <div className='skill-container' id='experience'>
            <h2>WHERE I'VE WORKED:</h2>
            <ul>
                <li onClick={changeMargin} value='zero'>{currentDate}<br /> 2022</li>
                <li onClick={changeMargin} value='one'>2020<br />2022</li>
                <li onClick={changeMargin} value='two'>2019<br />2022</li>
                <li onClick={changeMargin} value='three'>2012<br />2019</li>
                <hr className={margin} />
                <hr className='long' />
            </ul>
            <div className='jobinfo'>
                <h3>{ExperienceJson[margin].position}</h3>
                <h4 data-aos-once='true' data-aos='slide-up'>{ExperienceJson[margin].company}</h4>
            </div>

        </div>
    )

}

export default Experience
