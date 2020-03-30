import React from 'react';
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='card-container'>
        <Card 
          img='icon1.png'
          title='Declarative'
          text='React makes it painless to create interactiv UIs.'
        />
        <Card 
          img='icon2.png'
          title='Components'
          text='Build encapsulated components that manage their state.'
        />
        <Card 
          img='icon3.png'
          title='Single-Way'
          text='A set of immutable values are passed to the components.'
        />
        <Card 
          img='icon4.png'
          title='JSX'
          text='Statically-typed, designed to run on modern browsers.'
        />
      </div>
    </div>
  )
}

export default App;