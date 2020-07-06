import React from 'react';
import './Skills.scss';
import reactlogo from '../../assets/reactlogo.png';
import sasslogo from '../../assets/sasslogo.png';
import htmllogo from '../../assets/htmllogo.png';
import javascriptlogo from '../../assets/javascriptlogo.png';
import csslogo from '../../assets/csslogo.png';



function Skills() {


    return (
    <div id='/Skills' className='Skills'>
        <img alt='csslogo' className='csslogo' src={csslogo} />
        <img alt='reactjslogos' className='react-logo' src={reactlogo} />
        <img alt='sasslogo' className='sass-logo' src={sasslogo} />
        <img alt='javascriptlogo' className='javascriptlogo' src={javascriptlogo} />
        <img alt='htmllogo' className='htmllogo' src={htmllogo} />
    </div>
    )
}


export default Skills