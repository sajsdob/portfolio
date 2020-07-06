import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import github from '../../assets/github.png';
import insta from '../../assets/insta.png';
import linkedin from '../../assets/linkedin.png';
import './Social.scss';


AOS.init({ duration: 900 });

const Social = () => {


    return (

        <div data-aos='fade-in' className='social'>
            <div className='logo-container'>
                <a href="https://www.github.com/sajsdob" target="_blank" rel="noopener noreferrer">
                    <img alt='githublogo'  src={github} />
                </a>
                <a href="https://www.linkedin.com/in/sławomir-białynicki-birulo-b7573477" target="_blank" rel="noopener noreferrer">
                    <img  alt='linkedinlogo' src={linkedin} />
                </a>
                <a href="https://www.instagram.com/slavikbb" target="_blank" rel="noopener noreferrer">
                    <img alt='instalogo'  src={insta} />
                </a>
            </div>
        </div>
    )

}

export default Social