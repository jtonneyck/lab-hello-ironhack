import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    {/* Navbar */}
    <nav className="navBar"bg="dark">
    <img src={logo} className="App-logo" alt="logo" />
    <div className="menu">
      <p>dropdown</p>
    </div>
  </nav>

{/* Welcome screen */}
      <div className="App-header">
        <h1>
          Say hello to<br/><code>ReactJS</code>
        </h1>
        <p>You will learn a Frontend<br/> framework from scratch, to<br/> become a Ninka Developer.</p>
        <button>Awesome!</button>
      </div>

{/* Widgets */}
<div className="App-bottom">
<div className="row">

  <div className="col">
  <img src="/images/icon1.png" alt=""/>
    <h5>Declarative</h5>
    <p>React makes it<br/> painless to create<br/> interactive UI's.</p>
  </div>
  <div className="col">
  <img src="/images/icon2.png" alt=""/>
    <h5>Components</h5>
    <p>Build encapsulated<br/> components that <br/>manage their state.</p>
  </div>
  <div className="col">
  <img src="/images/icon3.png" alt=""/>
    <h5>Single-Way</h5>
    <p>A set of immutable<br/> values are passed to<br/> the component's.</p>
  </div>
  <div className="col">
  <img src="/images/icon4.png" alt=""/>
    <h5>JSX</h5>
    <p>Statically-typed,<br/> designed to run on<br/> modern browsers.</p>
  </div>
</div>
</div>
    
    
    </div>
  );
}

export default App;
