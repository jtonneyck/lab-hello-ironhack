import React from 'react';
import './App.css';
import Container1 from "./Container1";
import Navbar from "./Navbar";
import Hello from "./Hello";
import Button from "./Button";
import Container2 from "./Container2";
import Declarative from "./Declarative";
import Components from "./Components";
import SingleWay from "./SingleWay";
import JSX from "./JSX";

function App() {
  return (
    <div className="App">
      <Container1>
        <Navbar />
        <Hello />
        <Button />
      </Container1>
      <Container2>
        <Declarative />
        <Components />
        <SingleWay />
        <JSX />
      </Container2>
    </div>
  );
}

export default App;
