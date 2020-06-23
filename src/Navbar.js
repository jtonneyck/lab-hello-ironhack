import React from 'react';
import ironhackLogo from "./images/ironhack-logo.svg"
import menutop from "./images/menu-top.svg"
import './Navbar.css';


const Navbar = () => {
  return (
        <div class = "navbar">
            <img src = {ironhackLogo} alt = "Ironhack-logo"/> 
            <img src = {menutop} alt = "menu-top"/>
        </div> 
  );
}

export default Navbar;