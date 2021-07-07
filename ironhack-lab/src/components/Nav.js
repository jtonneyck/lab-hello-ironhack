import React from "react";


function Nav(props) {
    return(
        <nav>
            <img src = {props.ironLogo} alt = "Ironhack-logo"/>
            <img src = {props.meTop} alt = "Top-menu"/>
        </nav>
    )
}

export default Nav;