import React from 'react';
import './Asset.css';
function Asset(props){
    return(
        <div className = 'asset'>
            <img src={props.src} className="asset-img" alt="img" />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default Asset;