import React, { Component } from 'react';
import './todoapp.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


AOS.init({duration: 800});

class Projects extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='projects'>
                    <div className='project-list'>
                        <Link to="/Todoapp">
                        <div data-aos="fade-up" className='todo-list'><div className='background-color'></div><h1>TO DO LIST</h1></div>
                        </Link>
                        <Link to="/Todoapp">
                        <div data-aos="fade-up" className='todo-list'><div className='background-color'></div><h1>WEATHER APP</h1></div>
                        </Link>
                        <Link to="/Todoapp">
                        <div data-aos="fade-up" className='todo-list'><div className='background-color'></div><h1>SPOTIFY APP</h1></div>
                        </Link>
                    </div>
            </div>
        )
    }
}

export default Projects