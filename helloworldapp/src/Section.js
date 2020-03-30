import React from "react";

class Section extends React.Component {
    render() {
        return(
            <div class="section">
                <img src={this.props.image} alt="logo"/>
                <h3>{this.props.subtitle}</h3>
                <p>{this.props.subtext}</p>
            </div>
        )
    }
}

export default Section;