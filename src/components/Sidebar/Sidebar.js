import './Sidebar.scss';
import React, { Component } from 'react';


class Sidebar extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={this.props.sidebarClass}>
                <ul className='sideBarList'>
                    <li><a href='/#about'>ABOUT ME</a></li>
                    <li><a href='/#projects'>PROJECTS</a></li>
                    <li><a href='/#education'>EDUCATION</a></li>
                </ul>
            </div>
        )
    }
}



export default Sidebar;