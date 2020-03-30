import React from 'react';
import logo from './ironhack-logo.svg';
import './App.css';
import Logo from './Logo.jsx';
import SayHello from './SayHello.jsx';
import Button from './Button.jsx'
import FourIcons from './FourIcons.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="bodyFrame">
          <Logo />
          <SayHello />
          <Button />
        </div>
      </header>
      <div className="four-icons-frame">
        <FourIcons
          image="/icon1.png"
          header="Declarative"
          paragraph="React makes it painless to create interactive UIs."
        />
        <FourIcons
          image="/icon2.png"
          header="Components"
          paragraph="Build encapsulated components that manage their state."
        />
        <FourIcons
          image="/icon3.png"
          header="Single-Way"
          paragraph="A set of immutable values are passed to the component's."
        />
        <FourIcons
          image="/icon4.png"
          header="JSX"
          paragraph="Statically-typed, designed to run on modern browsers."
        />
      </div>
    </div>
  );
}

export default App;
