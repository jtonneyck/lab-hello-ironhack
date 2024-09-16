import React from 'react';
import logo from './logo.svg'; // importing logo from src folder
import './Header.css'
const Header = () => {
  return (
    <header className="App-header">
      <div className="mainText">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React, Ironhacker!</h1>
      <h3>You are ready to take this to the next level!</h3>
      <div className="getstatedbtn">Awsome</div>
      </div>
    </header>
  
  );
}

export default Header;