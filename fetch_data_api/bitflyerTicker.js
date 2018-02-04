const ccxt = require('ccxt');
const axios = require('./axios');

let getExchangeTicker = {
  symbol: "BTC/JPY",
  getBitflyerTicker: async function () {
    let bitflyer = new ccxt.bitflyer();
    let ticker = await bitflyer.fetchTicker(this.symbol);
    ticker = {
      symbol: ticker.symbol,
      datetime: ticker.datetime,
      bid: ticker.bid,
      ask: ticker.ask,
      last: ticker.last,
      baseVolume: ticker.baseVolume
    };
    await axios.post(`/bitflyers`, ticker)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
}

getExchangeTicker.getBitflyerTicker();