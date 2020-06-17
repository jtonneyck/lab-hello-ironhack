import React from "react";
import "./Container2.css";

function Container2(props){
    return (
        <div className="container2">
            {props.children}
        </div>
    )
}

export default Container2;