import React from "react";
import "./card.scss";

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt="" />
      <h1>{props.headline}</h1>
      <p>{props.copy}</p>
    </div>
  );
}

export default Card;
