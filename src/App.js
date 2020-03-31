import React from "react";
import Grid from "@material-ui/core/Grid"
import "./App.css";
import Navbar from "./Navbar";
import Bttn from "./Button";
import Homepage from "./Homepage";
import Onecard from "./Card";
import cards from "./cards.json";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div >
          <Navbar />
        </div>
        <div>
          <Homepage />
        </div>
        <div>
          <Bttn />
        </div>
      </div>
        <Grid container spacing={2}>
          {cards.map(card => (
            <Grid item xs={3} key={card.title}>
            <Onecard icon={card.icon} title={card.title} text={card.text} />
            </Grid>
          ))}
        </Grid>
    </div>
  );
}

export default App;