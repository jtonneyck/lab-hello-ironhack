import React, {Component} from 'react';

class Feature extends Component {
    render() {
        return (
            <div className="Feature">
                <img src={this.props.img_src} alt=""/>
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Feature;