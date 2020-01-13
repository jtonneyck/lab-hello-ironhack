import React from 'react';

import './IronhackInfo.css';

function IronhackInfo(props){

    return(
        <div className='ironhack-info'>
            <h1>{props.title}</h1>
            <h2>{props.text}</h2>
        </div>
    );

}

export default IronhackInfo;