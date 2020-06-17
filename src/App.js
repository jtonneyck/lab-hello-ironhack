import React from 'react';
import './App.css';
import Navbar from './Navbar.jsx';
import './Navbar.css';
import Contentcard from './Contentcard.jsx';
import Cardtitle from './Cardtitle.jsx';
import Cardtext from './Cardtext.jsx';

function App() {
    return (
        <div className="App">
            <section className="top-section">
                <Navbar>
                    <img src="/images/ironhack-logo.svg" alt="Ironhack Logo"/>
                    <img src="/images/menu-top.svg" alt="Burger Menu"/>
                </Navbar>
                <div className="title-section">
                    <h1>Say hello to ReactJS</h1>
                    <h3>You will learn a Frontend framework from scratch to become an Ninja Developer."</h3>
                </div>
                <button>Awesome!</button>
            </section>
            <section className="bottom-section">
                <Contentcard>
                    <img src="/images/icon1.png" alt="Declarative react"/>
                    <Cardtitle title="Declarative"/>
                    <Cardtext text="React makes it painless to create interactive UIs."/>
                </Contentcard>
                <Contentcard>
                    <img src="/images/icon2.png" alt="React components"/>
                    <Cardtitle title="Components"/>
                    <Cardtext text="Build encapsulated components that manage their state."/>
                </Contentcard>
                <Contentcard>
                    <img src="/images/icon3.png" alt="Single way"/>
                    <Cardtitle title="Single-Way"/>
                    <Cardtext text="A set of immutable values are passed to the component's."/>
                </Contentcard>
                <Contentcard>
                    <img src="/images/icon4.png" alt="JSX"/>
                    <Cardtitle title="JSX"/>
                    <Cardtext text="Statically-typed, designed to run on modern browsers."/>
                </Contentcard>
            </section>
        </div>
    );
}

export default App;
