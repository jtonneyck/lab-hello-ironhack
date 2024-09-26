import React from "react";
import './Features.css';

function Features() {
    return (
        <div className="features">
            <div className="feature">
                <div>
                    <img src="/icon1.png" alt="feature1"></img>
                </div>
                <div className="feature-text"> 
                    <h4>Declarative</h4>
                    <p>React makes it painless to create interactive UIs.</p>
                </div>
            </div>
            <div className="feature">
                <div>
                    <img src="/icon2.png" alt="feature2"></img>
                </div>
                <div className="feature-text">
                    <h4>Components</h4>
                    <p>Build encapsulated components that manage their state.</p>
                </div>
            </div>
            <div className="feature">
                <div>
                    <img src="/icon3.png" alt="feature3"></img>
                </div>
                <div className="feature-text">
                    <h4>Single-Way</h4>
                    <p>A set of immutable values are passed to the components.</p>
                </div>
            </div>
            <div className="feature">
                <div>
                    <img src="/icon4.png" alt="feature4"></img>
                </div>
                <div className="feature-text">
                    <h4>JSX</h4>
                    <p>Statically-typed designed to run on modern browsers.</p>
                </div>
            </div>
        </div>
    )
}

export default Features