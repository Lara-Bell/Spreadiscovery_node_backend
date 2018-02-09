import React, { Component } from 'react';
import 'bootstrap';

import fontawesome from '@fortawesome/fontawesome'
// import solid from '@fortawesome/fontawesome-free-solid'
// import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'
fontawesome.library.add(brands.faBtc);
fontawesome.library.add(brands.faTwitter);

class HeaderNav extends Component {
  render(){
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/"><i className="fab fa-btc"></i></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarHeader">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-3">
                <a className="nav-link " href="/donate"><i className="fab fa-bitcoin"></i><span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="/contact"><i className="fab fa-twitter"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderNav;