import React from 'react';
import './Hello.css';


function Hello(props){
    return(
        <div className = 'hello'>
            <div className = 'logo'>
                <img src='./images/ironhack-logo.svg' alt="ironhack logo" />
                <img src='./images/menu-top.svg' alt="menu" />
            </div>
            <div className="watermark">
                <img src='./images/react-logo.svg' />
            </div>
            <h1>Say hello to ReactJS</h1>
            <p>You will learn a Frontend framework from scratch, to become a Ninka Developer.</p>
            <a href="/">Awesome!</a>
        </div>
    )
}

export default Hello;