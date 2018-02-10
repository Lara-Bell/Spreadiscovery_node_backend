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
        <p>12mEmvjEr4fwdJtiKWs5McV2Pm9LZB3iGX</p>
        <h2 className="mt-5"><i className="fab fa-ethereum"></i> Ethereum (ETH)</h2>
        <p>0x8c5a00b946EBe0636117921e69695D235757131A</p>
        <h2 className="mt-5">Bitcoin Cash (BTH)</h2>
        <p>1EUCEjtRbgFkTApUStbzCUcecRMRTbsHag</p>
      </div>
    );
  }
}

export default Donate;