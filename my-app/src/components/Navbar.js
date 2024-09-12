import React from "react";


function Nav(props) {
    return(
        <nav>
            <img src = {props.ironhackLogo} alt = "Ironhack"/>
            <img src = {props.menuTop} alt = "menu"/>
        </nav>
    )
}

export default Nav;