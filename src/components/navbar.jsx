import React from 'react';
import "../css/navbar.css"


class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div>
          <img src="/images/ironhack-logo.svg" alt="Ironhack Logo" />
        </div>
        <div>
          <img src="/images/menu-top.svg" alt="Navigation Menu" />
        </div>
      </div>
    )
  }
}

export default Navbar;