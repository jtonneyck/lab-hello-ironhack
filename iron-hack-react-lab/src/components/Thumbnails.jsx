import React from 'react';
import "./Thumbnails.scss";

const Thumbnail = (props) => {
  return (
    <div className="thumbnail">
      <img src={props.image} alt=""/>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}
 

 
export default Thumbnail;