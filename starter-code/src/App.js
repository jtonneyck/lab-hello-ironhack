import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Copytop from "./components/Copytop.js";
import Button from "./components/Button.js";
import Card from "./components/Card";
import cardinfo from "./components/cardinfo.js";

function App() {
  return (
    <div className="App">
      <div className="top">
        <Navbar />
        <Copytop />
        <Button />
      </div>
      <div className="bottom">
        {cardinfo.map(x => (
          <Card image={x.image} headline={x.headline} copy={x.copy} />
        ))}
      </div>
    </div>
  );
}

export default App;
