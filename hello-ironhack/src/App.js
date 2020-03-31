import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Mainpage from './components/Mainpage';
import Features from './components/Features'

function App() {
  return (
    <div className="App">
      <Nav />
      <Mainpage />
      <Features />
    </div>
  );
}

export default App;
