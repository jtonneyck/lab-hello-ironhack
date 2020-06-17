import React from 'react';
import Heading from './Heading';
import Description from './Description';
import "./Card.css";

function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt=""/>
            <Heading title={props.title} />
            <Description text={props.text} />
        </div>
    );
}

export default Card;