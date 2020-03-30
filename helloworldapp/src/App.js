import React from 'react';
import logo from './logo.svg';
import './App.css';
import Text from "./Text.js";
import Button from "./Button.js";
import Navbar from "./Navbar.js";
import Section from "./Section.js";

class App extends React.Component {
    render() {
      return (
        <div className="app">
          <Navbar/>
          <Text/>
          <Button/>
          <Section image="./icon1.png" subtitle="Declarative" subtext="A"/>
          <Section image="./icon2.png" subtitle="Components" subtext="B"/>
          <Section image="./icon3.png" subtitle="Single-Way" subtext="C"/>
          <Section image="./icon4.png" subtitle="JSX" subtext="D"/>
        </div>
      )
    }
}

export default App;
