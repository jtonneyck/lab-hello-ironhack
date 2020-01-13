import React from 'react';

import './Info.css';

function Info(props){

    return (
        <div className="Info">
            <div><img src={props.image} alt='icon' width='70px'></img></div>
            <div>{props.title}</div>
            <div>{props.text}</div>
        </div>
    );

}

export default Info;