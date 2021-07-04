import React from 'react';
import './App.css';
import Navigation from "./components/Navigation"
import Text from "./components/Text"
import Button from "./components/Button"
import Block from "./components/Block"
import blocks from './blocks.json'; 

function App() {
  return (
    <div>
    <div className ="intro">
      <Navigation/>
      <Text/>
      <Button/>
    </div>
      <div className = "blocks">
        {blocks.map((block)=>
        <Block
          image = {block.image}
          title = {block.title}
          description = {block.description}
        />
        )}
      </div>
    </div>
  );
}
export default App;
