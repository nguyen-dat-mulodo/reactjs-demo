import React, { Component } from 'react';
import '../../assets/css/banner.css';

class Menu extends Component {
  render() {
    return(
      <div className={'banner'}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
          <li>Contact us</li>
          <li>About us</li>
        </ul>
      </div>
    );
  }
}

export default Menu;