import React, {Component} from 'react';
import Feature from './feature';

class Bottom extends Component {
    render() {
        return (
            <div className="bottom">
                <Feature 
                    img_src ="./icon1.png" 
                    title="Declarative" 
                    description="React makes it painless to create interactive UIs."
                />
                <Feature
                    img_src="./icon2.png"
                    title="Components"
                    description="Build encapsulated components that manage their state." 
                />
                <Feature
                    img_src="/icon3.png"
                    title="Single-Way"
                    description="A set of immutable values are passed to the components." 
                />
                <Feature
                    img_src="/icon4.png"
                    title="JSX"
                    description="Statically-typed, designed to run on modern browsers." 
                />               
            </div>
        )
    }
}


export default Bottom;