import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import IconOne from './IconOne.js'
class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
        <Header></Header>
      </div>
      <IconOne icon="/images/icon1.png" text1="Declarative" text2="React makes it easy to create interactive UI's."></IconOne>
      <IconOne icon="/images/icon2.png" text1="Components" text2="Build encapsulated components that manage thier state."></IconOne>
      <IconOne icon="/images/icon3.png" text1="Single-Way" text2="A set of immutable values are passed to the components."></IconOne>
      <IconOne icon="/images/icon4.png" text1="JSX" text2="Statically-typed, design to run on modern browsers."></IconOne>
      </div>
    );
  }
}



export default App;