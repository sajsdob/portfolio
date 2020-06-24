import React, { Component } from 'react';
import './todoapp.scss';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';



AOS.init({ duration: 800 });



function Projects() {


    const toTop = () => {
        window.scrollTo(0, 0)
    }

    return <div id='projects'>
        <h1 className='myprojects'>HERE ARE SOME THINGS I'VE BEEN WORKING ON:</h1>
        <div className='project-list'>
            <Link to="/Todoapp">
                <div onClick={toTop} data-aos="fade-up" className='todo-list'><div className='background-color'></div><h1>TO DO LIST</h1></div>
            </Link>
            <Link to="/Weatherapp">
                <div onClick={toTop} data-aos="fade-up" className='todo-list'><div className='background-color'></div><h1>WEATHER APP</h1></div>
            </Link>
            <Link to="/Spotifyapp">
                <div data-aos="fade-up" className='todo-list'><div className='background-color'></div><h1>SPOTIFY APP</h1></div>
            </Link>
        </div>
    </div>
}


export default Projects