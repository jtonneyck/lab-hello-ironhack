import React from 'react';
import "./Heading.css";

function Heading(props) {
    return (
        <h1 class="heading">{props.title}</h1>
    );
}

export default Heading;