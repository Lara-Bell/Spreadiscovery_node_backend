import React, { Component } from 'react';

import fontawesome from '@fortawesome/fontawesome'
// import solid from '@fortawesome/fontawesome-free-solid'
// import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'
fontawesome.library.add(brands.faBtc);
fontawesome.library.add(brands.faTwitter);

const dt = new Date();
const year = dt.getFullYear();

class FooterNav extends Component {
  render(){
    return (
      <footer className="my-5 pt-5 text-muted text-center text-small">
        <ul className="list-inline">
          <li className="list-inline-item mx-3"><a href="/privacy-policy">Privacy Policy</a></li>
          <li className="list-inline-item mx-3"><a href="/donate"><i className="fab fa-btc"></i> Donate</a></li>
          <li className="list-inline-item mx-3"><a href="/contact"><i className="fab fa-twitter"></i> Contact</a></li>
        </ul>
        <p className="my-3">© {year} SpreaDiscovery.com</p>
      </footer>
    );
  }
}

export default FooterNav;