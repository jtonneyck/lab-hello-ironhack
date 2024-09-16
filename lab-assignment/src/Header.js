import React from 'react';

class Header extends React.Component {
    render(){
        return (
            <div>
                <div className="homepage-header-container">
                    <div className="homepage-header-navigation">
                        <nav>
                            <img src="/images/ironhack-logo.svg" alt="Ironhack Logo"></img>  
                            <img class="homepage-header-navigation-hamburger" src="/images/menu-top.svg" alt="Ironhack Navigation Menu"></img>  
                        </nav>
                    </div>
                    <div className="homepage-header-content">
                        <div className="homepage-header-text">
                            <h2>Say hello to<br></br> ReactJS</h2>
                            <p>You will learn a Frontend framework from scratch to become a Ninja Developer.</p>
                        </div>
                        <div className="homepage-header-button">
                            <button>Awesome!</button>
                        </div>
                    </div>
                    
                </div>
                <div className="homepage-value-proposition-container">
                    <div className="homepage-value-proposition">
                        <img src="images/icon1.png"></img>
                        <h2>Declarative</h2>
                        <p>React makes it painless to create interactive UIs.</p>
                    </div>
                    <div className="homepage-value-proposition">
                        <img src="images/icon2.png"></img>
                        <h2>Components</h2>
                        <p>Build encapsulated components that manage their state.</p>
                    </div>
                    <div className="homepage-value-proposition">
                        <img src="images/icon3.png"></img>
                        <h2>Single-Way</h2>
                        <p>A set of immutable values that are passed to the compnent's.</p>
                    </div>
                    <div className="homepage-value-proposition">
                        <img src="images/icon4.png"></img>
                        <h2>JSX</h2>
                        <p>Statically-typed, designed to run on modern browsers.</p>
                    </div>
                </div>
            </div>
        )    
    }
}

export default Header;