import React from 'react';
import './App.css';

import Heading from './main';
import './Main.css';

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
      <div className="image-container">
        <div className="image">
          <img src="/icon1.png" alt="" className="image-img" />
        </div>
      </div>
    </div>
  );
}

export default App;
