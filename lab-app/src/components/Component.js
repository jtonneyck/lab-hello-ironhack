import React from 'react';
const component = (props) => {
  return (
    <div className="wrapper">
      <div className="dark-background">
        <header className="App-header">
          <nav>
              <img src = {props.src}></img>
              <img src = {props.src2}></img>
          </nav>
        </header>
        <div className="information">
          <h1>Say hello to ReactJs</h1>
          <p>You will lear a front-end framework to become a Ninka developer</p>
        </div>
        <button className="button">Awesome!</button>
      </div>
      <div className="light-background">
        <div><img src = {props.src3}></img><h3>Declarative</h3><p>React makes it painless to learn interactive UIs</p></div>
        <div><img src = {props.src4}></img><h3>Components</h3><p>Build encapsulated components that manage their state</p></div>
        <div><img src = {props.src5}></img><h3>Single-Way</h3><p>A set of immutable values are passed to the components</p></div>
        <div><img src = {props.src6}></img><h3>JSX</h3><p>Statically typed, designed to run on mordern browsers</p></div>
      </div>
    </div>
    
  );
}
 
export default component;