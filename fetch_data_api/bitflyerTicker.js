const config = require('./config');
const ccxt = require('ccxt');
const axios = require('axios');

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
    await axios.post(`${config.END_POINT}/bitflyers`, ticker)
      .then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.log(error);
      });
  }
}

getExchangeTicker.getBitflyerTicker();