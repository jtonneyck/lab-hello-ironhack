import React from "react";


function Icons(props) {
    return(
        <div className = "icons">
            <img src = {props.icon} alt = "icon"/>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default Icons;