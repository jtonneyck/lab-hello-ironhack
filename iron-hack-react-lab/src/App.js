import React from 'react';
import './App.css';
import NavBar from './components/Nav.jsx'
import Thumbnail from './components/Thumbnails.jsx'
import Hero from './components/Hero.jsx'
import Button from './components/Button.jsx'
import thumbnails from './thumbnails.json'

function App () {
    return (
      <div className="App">
        <NavBar />
        <Hero />
        <Button />
        <div className="thumbnails">
          {thumbnails.map((thumbnails)=>
          <Thumbnail
            image = {thumbnails.image}
            title = {thumbnails.title}
            description = {thumbnails.description}
          />
          )}
        </div>
      </div>
    );
  }


export default App;