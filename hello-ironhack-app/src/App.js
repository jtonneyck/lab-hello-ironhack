import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import IntroHeader from "./IntroHeader";
import './IntroHeader.css';
import Card from './Card';
import cards from './cards.json';
import FlexBox from './Flexbox';

function App() {
  return (
    <div>
      <div className="header">
        <Navbar />
        <IntroHeader />
      </div>
      <FlexBox>
          {
            cards.map((card)=>
              <Card 
                image={card.image}
                title={card.title}
                text={card.description}
              />
            )
          }
      </FlexBox>
    </div>
    
  );
}

export default App;
