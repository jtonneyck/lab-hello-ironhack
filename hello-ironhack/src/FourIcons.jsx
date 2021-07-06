import React, { Component } from 'react';
import './fourIcons.css';

function FourIcons(props){
  return (
        <div className="four-icons-div">
                <img src={props.image} alt="icon" />
                <h3>{props.header}</h3>
                <p>{props.paragraph}</p>
        </div>
  );
}

export default FourIcons;
