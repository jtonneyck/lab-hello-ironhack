import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Button from "./components/Button";
import Features from "./components/Features";
import features from "./components/features";




function App() {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
        <Intro />
        <Button />
      </div>
      <div className="feature-cards">
      {
        features.map((feature) => (
          <Features 
          image={feature.image}
          title={feature.title}
          description={feature.description}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
