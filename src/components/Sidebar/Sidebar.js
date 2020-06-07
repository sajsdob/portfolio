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
                    <li onClick={this.props.changeSideBarClass}><a href='/#aboutme'>ABOUT ME</a></li>
                    <li onClick={this.props.changeSideBarClass}><a href='/#projects'>PROJECTS</a></li>
                    <li onClick={this.props.changeSideBarClass}><a href='/#education'>EDUCATION</a></li>
                </ul>
            </div>
        )
    }
}



export default Sidebar;