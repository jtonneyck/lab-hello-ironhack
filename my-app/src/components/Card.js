import React from "react";

function Card(props) {
    return (
        <section className='card-item'>
            <img src={props.img} alt='icon'/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </section>
    )
}

export default Card;