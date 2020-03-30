import React, {Component} from 'react';
import Navbar from './navbar';

// import Navbar form './navbar';

class TopPart extends Component {
    render() {
        return (
            <div className="top-BG">
                <Navbar/>
                <div id="top-div">
                    <h1>Say hello to ReactJs</h1>
                    <p>You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
                    <a>Awesome!</a>
                </div>
                
                
            </div>
        )
    }
}


export default TopPart;