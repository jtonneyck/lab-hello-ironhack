import React from "react";
import './Contentcard.css';

function Contentcard(props){
    return(
        <div className="Contentcard">
            {props.children}
        </div>
    );
}

export default Contentcard;