import React from "react";
import "../css/main.css";

class MainText extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn a Frontend framework from scratch, to become a Ninja
          Developer.
        </p>
      </div>
    );
  }
}

export default MainText;