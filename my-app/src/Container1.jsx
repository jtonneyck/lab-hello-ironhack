import React from "react";
import "./Container1.css";

function Container1(props){
    return (
        <div className="container1">
            {props.children}
        </div>
    )
}

export default Container1;