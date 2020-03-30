import React, {Component} from 'react';

class Bottom extends Component {
    render() {
        return (
            <div className="bottom">
                <div className="Feature">
                    <img src="/f1.png" alt=""/>
                    <h4>Declarative</h4>
                    <p>React makes it painless to create interactive UIs.</p>
                </div>
                <div className="Feature">
                    <img src="/f2.png" alt=""/>
                    <h4>Components</h4>
                    <p>Build encapsulated components that manage their state.</p>
                </div>
                <div className="Feature">
                    <img src="/f3.png" alt=""/>
                    <h4>Single-Way</h4>
                    <p>A set of immutable values are passed to the components.</p>
                </div>
                <div className="Feature">
                    <img src="/f4.png" alt=""/>
                    <h4>JSX</h4>
                    <p>Statically-typed, designed to run on modern browsers.</p>
                </div>
                
            </div>
        )
    }
}


export default Bottom;