import React from 'react';
import './App.css';
import Asset from './components/Asset';
import FlexBox from './components/FlexBox';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Hello />
      <FlexBox>
        <Asset src = "../images/icon1.png" name = "Declarative" description = "React makes it painless to create interactive UIs." />
        <Asset src = "../images/icon2.png" name = "Components" description = "Build encapsulated components that manage their state." />
        <Asset src = "../images/icon3.png" name = "Single-Way" description = "A set of immutable values are passed to the components's." />
        <Asset src = "../images/icon4.png" name = "JSX" description = "Statically-typed, designed to run on modern browsers." />
      </FlexBox>
    </div>
  );
}

export default App;
