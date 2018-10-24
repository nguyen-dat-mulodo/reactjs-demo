import React, { Component } from 'react';
import '../assets/css/Footer.css';

class Footer extends Component {
  render() {
    return(
        <div className={'footer'}>
          <div className={'left-footer'}>
            <div className='logo'>
              <img src={'test.jpg'} alt={'logo'} />
            </div>
            <div className={'footer-info'}>
              address <br />
              phone number <br />
              Company contact <br />
            </div>
          </div>
          <div className={'right-footer'}>
            <div className={'menu-footer'}>
              lorem 1
            </div>
            <div className={'hot-contact'}>
              lorem 2
            </div>
          </div>
        </div>
    );
  }
}

export default Footer;
