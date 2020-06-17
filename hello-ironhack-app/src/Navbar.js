import React from 'react';
import './Navbar.css';

function Navbar(props) {
    return (
        <nav>
            <a className="logo" href="/logo"><img src="/images/ironhack-logo.svg" alt="ironhack-logo"/></a>
            <a className="navbar" href="/nav"><img src="/images/menu-top.svg" alt="navbar"/></a>
        </nav>
    );
}

export default Navbar;