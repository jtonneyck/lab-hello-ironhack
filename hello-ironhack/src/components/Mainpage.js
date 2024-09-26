import React from "react";
import './Mainpage.css';

function Mainpage() {
    return (
        <div className="overview">
            <div className="main">
            <div className="welcome">
                <h1>Say hello to ReactJS</h1>
            </div>
            <div className="welcome-subtitle">
                <p>You will learn a Frontend framework from scratch, to become an Ninja Developer.</p>
            </div>
            <div>
                <a href="#" className="button">Awesome!</a>
            </div>
            </div>
            <div className="react">
                <img src="/react-logo.svg" alt="react-logo"></img>
            </div>
        </div>
    )
}

export default Mainpage;