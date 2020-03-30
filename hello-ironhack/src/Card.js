import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="image-card">
        <img src="" alt="" className="image-img" />
        <h3 className="image-card-heading">{this.props.title}</h3>
        <p className="image-card-text">{this.props.text}</p>
      </div>
    );
  }
}

export default Card;
