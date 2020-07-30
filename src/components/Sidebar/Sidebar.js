import './Sidebar.scss';
import React, { Component } from 'react';
// import github from '../../assets/gitwhite.png';
// import insta from '../../assets/instawhite.png';
// import linkedin from '../../assets/linkwhite.png';
import github from '../../assets/github.png';
import insta from '../../assets/insta.png';
import linkedin from '../../assets/linkedin.png';


class Sidebar extends Component {

    constructor(props) {
        super(props);
        
    }


    render() {
        return (
            <div className={this.props.sidebarClass}>
                <div onClick={this.props.changeSideBarClass} className='menu'>
                    <div className={this.props.sidebarClassLineOne}></div>
                    <div className={this.props.sidebarClassLineTwo}></div>
                    <div className={this.props.sidebarClassLineThree}></div>
                </div>
                <ul className='sideBarList'>
                    <li onClick={this.props.changeSideBarClass}><a href='/#top'> ABOUT ME</a></li>
                    <div className='sideline'></div>
                    <li onClick={this.props.changeSideBarClass}><a href='/#projects'>PROJECTS</a></li>
                    <div className='sideline'></div>
                    <li onClick={this.props.changeSideBarClass}><a href='/#experience'>EXPERIENCE</a></li>
                    <div className='sideline'></div>
                    <li onClick={this.props.changeSideBarClass}><a href='/#skills'>SKILLS</a></li>
                </ul>
                <div className='social-container'>
                        <a href="https://www.github.com/sajsdob" target="_blank" rel="noopener noreferrer">
                            <img alt='githublogo' src={github} />
                        </a>
                        <a href="https://www.linkedin.com/in/sławomir-białynicki-birulo-b7573477" target="_blank" rel="noopener noreferrer">
                            <img alt='linkedinlogo' src={linkedin} />
                        </a>
                        <a href="https://www.instagram.com/slavikbb" target="_blank" rel="noopener noreferrer">
                            <img alt='instalogo' src={insta} />
                        </a>
                    </div>
            </div>
        )
    }
}



export default Sidebar;