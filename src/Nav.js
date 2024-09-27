import React from 'react';
import './Nav.css';


class Nav extends React.Component {

  render() {
    return (
      <div className='Nav'>
        <img src='/images/ironhack-logo.svg' className="Nav-logo" alt="logo" />
        <img src='/images/menu-top.svg' className="Nav-menu" alt="nav" />
      </div>
    );
  }
}

export default Nav;