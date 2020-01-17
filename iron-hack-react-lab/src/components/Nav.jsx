import React from 'react';
import "./Nav.scss";
 
const NavBar = () => {
  return (
    <div className="nav-bar">
      <div id="ironhack-logo">
        <img src="./ironhack-logo.svg" alt=""/>
      </div>
      <div id="menu-img">
        <img src="./menu-top.svg" alt=""/>
      </div>

    </div>
  )
}
 
export default NavBar;