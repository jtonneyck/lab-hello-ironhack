import React from 'react';
import './App.css';
import Heading from './Main';
import './Main.css';
import Card from './Card';
import './Card.css';

// import icon1 from '/public/icon1.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar-nav">
          <a href="/" className="nav-item">
            <img src="./ironhack-logo.svg" alt="" className="navbar-brand" />
          </a>
        </nav>
        <img src="/react-logo.svg" alt="" className="main-img" />

        <Heading />
        <a className="main-link" href="/">
          Awesome!
        </a>
      </header>

      <div className="card-container">
        <div className="card">
          <img src="/icon1.png" alt="" className="card-img" />
          <Card
            title="Declarative"
            text="React makes it painless to create interactive UIs"
          />
        </div>
        <div className="card">
          <img src="/icon2.png" alt="" className="card-img" />
          <Card
            title="Components"
            text="Build encapsulated components that manage their state"
          />
        </div>
        <div className="card">
          <img src="/icon3.png" alt="" className="card-img" />
          <Card
            title="Single-Way"
            text="A set of immutable values are passed to the components"
          />
        </div>
        <div className="card">
          <img src="/icon4.png" alt="" className="card-img" />
          <Card
            title="JSX"
            text="Statically typed, designed to run on modern browsers"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
