import React, { Component } from 'react';

import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import solid from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(brands.faBtc);
fontawesome.library.add(brands.faEthereum);
fontawesome.library.add(solid.faDollarSign);

class Donate extends Component {
  render() {
    return (
      <div className="container col-xs-12 content-page donate">
        <h1 className="mt-5"><i className="fas fa-dollar-sign"></i> Donate</h1>
        <p>Donations help! We'd like to offer real-time API endpoints very soon with more complex conditional evaluation and webhooks.</p>
        <h2 className="mt-5"><i className="fab fa-btc"></i> Bitcoin (BTC)</h2>
        <p>***REMOVED***</p>
        <h2 className="mt-5"><i className="fab fa-ethereum"></i> Ethereum (ETH)</h2>
        <p>***REMOVED***</p>
        <h2 className="mt-5">Bitcoin Cash (BTH)</h2>
        <p>***REMOVED***</p>
      </div>
    );
  }
}

export default Donate;