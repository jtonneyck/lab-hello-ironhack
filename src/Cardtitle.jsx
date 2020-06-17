import React from "react";
import './Cardtitle.css';

function Cardtitle(props){
    return(
        <h2 className="Cardtitle">{props.title}</h2>
    );
}

export default Cardtitle;