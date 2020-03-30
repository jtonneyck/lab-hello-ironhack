import React from 'react';
import "./Card.css"

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="" />
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default Card;