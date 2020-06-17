import React from 'react';
import './App.css';
import Component from './components/Component.js'
import ironhackLogo from './images/ironhack-logo.svg'
import navigationIcon from './images/menu-top.svg'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
function App() {
  return (
    <div className="App">
      <Component src={ironhackLogo} src2 ={navigationIcon} src3={icon1} src4={icon2} src5={icon3} src6={icon4}/>
    </div>
  );
}

export default App;
