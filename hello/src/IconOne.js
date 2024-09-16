import React from 'react';
import logo from './logo.svg';
import './App.css';

function IconOne(props) {
  return (                                  
    <>
    <div className="iconClass">
    <img src = {props.icon} height="80"></img>
  <div class ="iconText">{props.text1}</div>
  <div>{props.text2}</div>
  </div>
    </>
  );
}

export default IconOne;
