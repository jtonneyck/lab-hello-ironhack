import React from "react";
import "./Features.css";

function Features(props){
    return(
        <div className="features">
            <img src={props.image} alt=""/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default Features;