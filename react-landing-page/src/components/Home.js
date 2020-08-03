import React from "react";

const Home = (props) => {
    return (
        <div>
            <h2>{props.homeTitle}</h2>
            <p>{props.homeDescription}</p>
            <button>Awesome!</button>
        </div>
    )
}



export default Home;