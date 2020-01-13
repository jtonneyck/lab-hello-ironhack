import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Copytop from "./components/Copytop.js";
import Button from "./components/Button.js";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="top">
        <Navbar />
        <Copytop />
        <Button />
      </div>
      <div className="bottom">
        <Card
          image="/images/icon1.png"
          headline="Declarative"
          copy="React makes it painless to create interactive UIs."
        />
        <Card
          image="/images/icon2.png"
          headline="Components"
          copy="Build encapsulated components that manage their state."
        />
        <Card
          image="/images/icon3.png"
          headline="Single-Way"
          copy="A set of immutable values are passed to the components"
        />
        <Card
          image="/images/icon4.png"
          headline="JSX"
          copy="Statically-typed, designed to run on modern browsers"
        />
      </div>
    </div>
  );
}

export default App;
