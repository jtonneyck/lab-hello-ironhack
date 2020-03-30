import React, {Component} from 'react';
import logo from './ironhack-logo.svg';
import menu from './menu-top.svg';

class Navbar extends Component {
    render() {
        return (
            <div className="nav">
                <img src={logo} alt="logo" id="logo"/>
                <img src={menu} alt="nav-icon" id="icon"/>

            </div>
        )
    }
}

export default Navbar;