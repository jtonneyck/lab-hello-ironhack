import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Button from './components/Button';
import Icons from './components/Icons'
import ironhackLogo from "./images/ironhack-logo.svg";
import menuTop from "./images/menu-top.svg";
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

function App() {
  return (
    <div className = "App">
      <Navbar ironhackLogo = {ironhackLogo} menuTop = {menuTop}/>
      <Text/>
      <Button/>
      <div className = "icon-container">
        <Icons icon = {icon1} text = "React makes it painless to create interactive UIs." title = "Declarative"/>
        <Icons icon = {icon2} text = "Build encapsulated components that manage their state" title = "Components"/>
        <Icons icon = {icon3} text = "A set of immutable values are passed to the component's" title = "Single-Way"/>
        <Icons icon = {icon4} text = "Statically-typed, designed to run on modern browsers." title = "JSX"/>
      </div>
    </div>
  )
}


export default App;