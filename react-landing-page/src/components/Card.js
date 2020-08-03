import React from "react";

const Card = (props) => {
    return (
        <div>
            <img src={props.cardImage}></img>
            <h2>{props.cardTitle}</h2>
            <p>{props.cardDescription}</p>
        </div>
    )
}



export default Card;