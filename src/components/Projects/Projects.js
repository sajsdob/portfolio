import React from 'react';
import './Projects.scss';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';



AOS.init({ duration: 800 });



function Projects() {


    const toTop = () => {
        window.scrollTo(0, 0)
    }

    return <div id='projects'>
        <h1 className='myprojects'>PROJECTS I'VE BEEN WORKING ON:</h1>
        <div  className='project-list'>
            <Link data-aos-once='true' data-aos="fade-up" to="/Grades">
                <div onClick={toTop} className='todo-list'><div className='background-color'></div><h1>GRADE AVERAGE</h1><span>OPEN</span></div>
                <div  data-aos-once='true' data-aos="fade-up" className='sepLine'></div>
            </Link>
            <Link data-aos-once='true' data-aos="fade-up" to="/Weatherapp">
                <div onClick={toTop}  className='todo-list'><div className='background-color'></div><h1>WEATHER APP</h1> <span>OPEN</span></div>
                <div  data-aos-once='true' data-aos="fade-up" className='sepLine'></div>
            </Link>
            <Link data-aos-once='true' data-aos="fade-up" className='boxshadow' to="/Todoapp">
                <div onClick={toTop}  className='todo-list'><div className='background-color'></div><h1>TO DO LIST</h1><span>OPEN</span></div>
                <div data-aos-once='true' data-aos="fade-up" className='sepLine'></div>
            </Link>
            <Link data-aos-once='true' data-aos="fade-up" to="/Tiktaktoe">
                <div onClick={toTop}  className='todo-list'><div className='background-color'></div><h1>TIC TAC TOE</h1><span>OPEN</span></div>
                <div  data-aos-once='true' data-aos="fade-up" className='sepLine'></div>
            </Link>
            <Link data-aos-once='true' data-aos="fade-up" to="/Memorygame">
                <div onClick={toTop} className='todo-list'><div className='background-color'></div><h1>MEMORY GAME</h1><span>OPEN</span></div>
            </Link>
        </div>
    </div>
}


export default Projects