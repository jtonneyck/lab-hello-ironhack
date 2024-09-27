import React from 'react';
import './App.css';
import Text from './Text';
import Nav from './Nav';
import Button from './Button';
import Card from './Card';
import Cards from './Cards.json'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Nav/>
        <Text/>
        <Button/>
      </div>
      <div className="App-cards">
        {Cards.map((card) =>
        <Card 
        image = {card.image}
        title = {card.title}
        text = {card.text}
        />
        )}
      </div>
    </div>
  );
}

export default App;
