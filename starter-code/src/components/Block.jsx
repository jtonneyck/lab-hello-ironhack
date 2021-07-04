import React from 'react';
import "./Block.scss"

const Block = (props) => {
    return (
        <div className = "block">
            <img src={props.image} alt=""/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default Block;
