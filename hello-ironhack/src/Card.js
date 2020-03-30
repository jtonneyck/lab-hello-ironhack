import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card-content">
        <h3 className="card-heading">{this.props.title}</h3>
        <p class="card-text">{this.props.text}</p>
      </div>
    );
  }
}

export default Card;
