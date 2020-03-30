import React from 'react';
import './App.css';

import Heading from './main';
import './Main.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar-nav">
          <a href="/" className="nav-item">
            <img src="./ironhack-logo.svg" alt="" className="navbar-brand" />
          </a>
        </nav>
        <Heading />
        <a className="main-link" href="/">
          Awesome!
        </a>
      </header>
    </div>
  );
}

export default App;
