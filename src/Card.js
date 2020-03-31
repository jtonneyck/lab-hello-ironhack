import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function Onecard(props) {
  console.log(props.icon)
  return (
    <div className="card-container">
      <div className="card-item">
        <Card>
          <CardContent>
            <img src={require(`../assets/${props.icon}`)} className="card-icon" alt=""/>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Onecard;