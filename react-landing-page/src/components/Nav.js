import React from "react";

const Nav = (props) => {
    return (
        <div>
            <ul>
                <li><img src={props.logo} height="48px" width="48px"></img></li>
                <li><img src={props.dropDown} height="48px" width="48px"></img></li>
            </ul>
        </div>
    )
}

export default Nav;