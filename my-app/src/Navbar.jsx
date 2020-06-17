import React from "react";
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <img src="ironhack-logo.svg" alt=""/>
                <img src="menu-top.svg" alt=""/>
            </div>
        )
    }
}

export default Navbar;