import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header"
import Text from "./components/text"
import SmallHead from "./components/smallHead"
import ironhackLogo from "./images/ironhack-logo.svg"
import ironhackMenu from "./images/menu-top.svg"
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div id="flex-1">
          <div>
            <img src={ironhackLogo} alt="logo" />
          </div>
          <div>
            <img src={ironhackMenu} alt="logo" />
          </div>
        </div>
        <div id="letter-position">
        <div>
        <Header data="Say hello to ReactJS" />
        </div>
        <div>
        <Text data="You will learn a Frontend framework 
            from scratch,to become a Ninja Developer."/>
            </div>
            <input type="button" value="Awesome!"/>
            </div>
      </header>
      <div id="icons">
        <div>
      <img src={icon1} alt="logo" />
      <SmallHead data="Declarative" />
      <div className="paragraphs">
      <Text data="React makes it painless to create interactive UI's" />
      </div>
      </div>
      <div>
      <img src={icon2} alt="logo" />
      <SmallHead data="Components" />
      <div className="paragraphs">
      <Text data="Build Encapsulated components that manage their state" />
      </div>
      </div>
      <div>
      <img src={icon3} alt="logo" />
      <SmallHead data="Single-Way" />
      <div className="paragraphs">
      <Text data="A set of immutable values are passed to the component's" />
      </div>
      </div>
      <div>
      <img src={icon4} alt="logo" />
      <SmallHead data="JSX" />
      <div className="paragraphs">
      <Text data="Statically-type, designed to run on modern browsers " />
      </div>
      </div>
    </div>
    </div>
  );
}



export default App;
