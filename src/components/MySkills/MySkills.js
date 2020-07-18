import React from 'react';
import './MySkills.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({ duration: 900 });

const Languages = () => {


    return (
        <div className='myskills' id='skills'>
            <h1>SOME OF MY SKILLS:</h1>
            <div data-aos-once ='true' data-aos='fade-up' className='types-of-skills'>
                  <ul className='languages'>
                      <p>Languages I speak:</p>
                      <li>ENGLISH <span>C2</span></li>
                      <li>RUSSIAN <span>B2</span></li>
                      <li>GERMAN <span>A1</span></li>
                      <li>POLISH <span>NATIVE</span></li>
                  </ul>
                  <ul className='technologies'>
                      <p>Technologies I use:</p>
                      <li>HTML</li>
                      <li>(<span>S</span>)CSS</li>    
                      <li>JAVASCRIPT</li>
                      <li>REACT (<span>ES6+</span>)</li>
                  </ul>
                  <ul className='soft'>
                      <p>Soft skills I possess:</p>
                      <li>PATIENCE</li>
                      <li>ADAPTABILITY</li>    
                      <li>SELF AWERNSESS</li>
                      <li>PROBLEM SOLVING</li>
                  </ul>
            </div>
        </div>
    )
}

export default Languages