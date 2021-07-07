import React from "react";
import logo from './logo.svg';

class Navbar extends React.Component {
    render() {
        return(
            <div className="navbar">
                 <img src="/ironhack-logo.svg" alt="logo"/>
                 <a href="#"><img src="/menu-top.svg" alt="logo"/></a>
            </div>
        )
    }
}

export default Navbar;