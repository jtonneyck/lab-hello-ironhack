import React, { Component } from 'react';
import './logo.css';
import logo from './ironhack-logo.svg';


function Logo() {
  return (
    <div className="logo-frame">
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default Logo;