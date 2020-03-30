import React, { component } from 'react';

class Card extends component {
  render() {
    return (
      <div className="image-card">
        <h3 className="image-card-heading">{this.props.title}</h3>
        <img src="" alt="" className="image-img" />
      </div>
    );
  }
}

export default Card;
