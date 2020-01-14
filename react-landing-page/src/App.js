import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav 
        class="navbar"
        logo="./images/ironhack-logo.svg"
        dropDown="./images/menu-top.svg"
      >

      </Nav>

      <Home 
      class="frontpage"
      homeTitle="Say hello to ReactJS"
      homeDescription="You will learn a Frontend framework from scratch, to become a Ninka developer"
      >

      </Home>
      
      <div class="cards">
        <Card
        cardImage="./images/icon1.png"
        cardTitle="Declarative"
        cardDescription="React makes it painless to create interactive UIs."
        >
        </Card>
        <Card
        cardImage="./images/icon2.png"
        cardTitle="Components"
        cardDescription="Build encapsulated components that manage their state."
        >
          
        </Card>

        <Card
        cardImage="./images/icon3.png"
        cardTitle="Single-way"
        cardDescription="A set of immutable values are passed to the components."
        >

        </Card>

        <Card
        cardImage="./images/icon4.png"
        cardTitle="JSX"
        cardDescription="Statically-typed, designed to run on modern browsers."
        >

        </Card>
      </div>
    </div>
  );
}

export default App;
