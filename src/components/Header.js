import React, { Component } from 'react';
import '../assets/css/Header.css';

class Header extends Component {
  render() {
    return(
        <div className="nav-bar">
          <div className="logo-branch">
            <a href="/">Home</a>
          </div>
          <ul className="menu-items">
            <li><a href="/">Instagram</a></li>
            <li><a href="/">WhatsApp</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
    );
  }
}

export default Header;
