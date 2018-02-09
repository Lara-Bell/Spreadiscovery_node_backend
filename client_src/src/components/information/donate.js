import React, { Component } from 'react';

class Donate extends Component {
  render() {
    return (
      <div class="container col-xs-12 content-page donate">
        <h1><i class="material-icons">thumb_up</i> Donate</h1>
        <p>Donations help! We'd like to offer real-time API endpoints very soon with more complex conditional evaluation and webhooks.</p>
        <h2>Bitcoin</h2>
        <p>12mEmvjEr4fwdJtiKWs5McV2Pm9LZB3iGX</p>
        <h2>Ethereum</h2>
        <p>0x8c5a00b946EBe0636117921e69695D235757131A</p>
        <h2>Bitcoin Cash</h2>
        <p>1EUCEjtRbgFkTApUStbzCUcecRMRTbsHag</p>
      </div>
    );
  }
}

export default Donate;