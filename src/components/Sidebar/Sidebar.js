import './Sidebar.scss';
import React, { Component } from 'react';


class Sidebar extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={this.props.sidebarClass}></div>
        )
    }
}



export default Sidebar;