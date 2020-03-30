import React, {Component} from 'react';
import logo from './logo.svg';


class Navbar extends Component {
    render() {
        return (
            <div className="nav">
                <img src="/ih.png" alt="logo" id="logo"/>
                <img src="/nav.png" alt="nav-icon" id="icon"/>

            </div>
        )
    }
}

export default Navbar;