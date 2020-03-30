import React from "react";
import "../css/feature.css";

class Feature extends React.Component {
  render() {
    return (
      <div className="features">
        <img src={this.props.image} alt="" />
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default Feature;
