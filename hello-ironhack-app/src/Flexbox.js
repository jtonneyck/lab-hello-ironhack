import React from "react";
import "./Flexbox.css";

function FlexBox(props){
    return (
        <div className="flexbox">
            {props.children}
        </div>
    )
}

export default FlexBox;