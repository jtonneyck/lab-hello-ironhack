import React from 'react';

import './Info.css';

function Info(props){

    return (
        <div className="Info">
            <div><img src={props.image} alt='icon' width='85px'></img></div>
            <h3>{props.title}</h3>
            <h4>{props.text}</h4>
        </div>
    );

}

export default Info;