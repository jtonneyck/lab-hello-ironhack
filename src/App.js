import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import MainText from "./components/main";
import Button from "./components/button";
import Feature from "./components/features";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="app-header">
          <Navbar />
          <MainText />
          <Button />
        </div>
        <div className="bottom">
          <Feature
            image="/images/icon1.png"
            title="Declarative"
            description="React makes it painless to create interactive UIs."
          />
          <Feature
            image="/images/icon2.png"
            title="Components"
            description="Build encapsulated components that manage their state."
          />
          <Feature
            image="/images/icon3.png"
            title="Single-Way"
            description="A set of immutable values are passed to the components."
          />
          <Feature
            image="/images/icon4.png"
            title="JSX"
            description="Statically-typed, designed to run on modern browsers."
          />
        </div>
      </div>
    );
  }
}

export default App;
