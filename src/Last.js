import React from 'react';
import './Last.css';
import declarative from './images/icon1.png'
import component from './images/icon2.png'
import singleway from './images/icon3.png'
import jsx from './images/icon4.png'

const Last = (props) => {
  return (
      <div class = "container">
            <div class = "declarative" >
                 <img src= {declarative} alt="nopic"/>
                 <h3>Declarative</h3>
                  <p>React makes it painless to learn interactive UIs</p>
            </div> 
           <div class = "declarative" >
                <img src= {component} alt="nopic"/>
                <h3>Component</h3>
                <p>Build encapsulated components that manage thier state.</p>
          </div> 

             <div class = "declarative" >
                <img src= {singleway} alt="nopic"/>
                <h3>Single-Way</h3>
                <p>A set of immutable value are passed to the compnent's</p>
           </div> 

           <div class = "declarative" />
                <img src= {jsx} alt = "nopic" />
                <h3>JSX</h3>
                <p>statically-typed design to run on modern browsers.</p>
           </div> 
  );
}
export default Last;