import React from 'react';
import "./IronhackHeader.css";
import Logo from "./Logo.js";
import Hamburger from "./Hamburger.js";

function IronhackHeader(props){
    return (
        <div className='ironhack-header'>
            <Logo image={props.img_logo}></Logo>
            <Hamburger image={props.img_menu}></Hamburger>
        </div>
    )
}

export default IronhackHeader;