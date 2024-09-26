import React from "react";
import './Nav.css';

function Nav() {
    return (
        <div className="nav">
            <div className="menu">
                <a href="#">
                    <img src="/ironhack-logo.svg" alt="ironhack-logo"></img>
                </a>
            </div>
            <div className="menu">
                <a href="#">
                    <img src="/menu-top.svg" alt="menu"></img>
                </a>
            </div>
        </div>
    )
}

export default Nav