import React from 'react';
import './Skills.scss';
import reactlogo from '../../assets/reactlogo.png';
import sasslogo from '../../assets/sasslogo.png';
import htmllogo from '../../assets/htmllogo.png'
import javascriptlogo from '../../assets/javascriptlogo.png'


function Skills() {
    
    // function serachMovies () {
    //     fetch(proxyUrl + targetUrl)
    //     .then(res => res.json())
    //     .then (weather => console.log(weather))
    // }
 
    return <div id='/Skills' className='Skills'>
                <img alt='reactjslogos' className='react-logo' src={reactlogo}/>
                <img alt='sasslogo' className='sass-logo' src={sasslogo}/>
                <img alt='htmllogo' className='htmllogo' src={htmllogo}/>
                <img alt='javascriptlogo' className='javascriptlogo' src={javascriptlogo}/>
           </div>
}


export default Skills