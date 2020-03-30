import React from 'react';
import './App.css';
import Heading from './Main';
import './Main.css';
import Card from './Card';

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

      <div className="card">
        <div className="card">
          <img src="/icon1.png" alt="" className="image-img" />
          <Card
            title="Declarative"
            text="React makes it painless to create interactive UIs"
          />
        </div>
        <div className="card">
          <img src="/icon2.png" alt="" className="image-img" />
          <Card
            title="Components"
            text="React makes it painless to create interactive UIs"
          />
        </div>
        <div className="card">
          <img src="/icon3.png" alt="" className="image-img" />
          <Card
            title="Single-Way"
            text="React makes it painless to create interactive UIs"
          />
        </div>
        <div className="card">
          <img src="/icon4.png" alt="" className="image-img" />
          <Card
            title="JSX"
            text="React makes it painless to create interactive UIs"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
