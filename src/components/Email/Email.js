import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Email.scss';


AOS.init({ duration: 900 });

const Email = () => {


    return (

        <div data-aos='fade-in' className='email'>
            <a href='mailto: sajsdob@gmail.com'>sajsdob@gmail.com</a>
        </div>
    )

}

export default Email