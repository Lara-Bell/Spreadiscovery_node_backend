const config = require('./config');
const ccxt = require('ccxt');
const axios = require('axios');

const getExchangeTicker = {
  symbol: "BTC/JPY",
  getBtcboxTicker: async function () {
    let btcbox = new ccxt.btcbox();
    let ticker = await btcbox.fetchTicker(this.symbol);
    // console.log(btcbox.id, JSON.stringify(ticker), ticker);
    ticker = {
      symbol: ticker.symbol,
      datetime: ticker.datetime,
      high: ticker.high,
      low: ticker.low,
      bid: ticker.bid,
      ask: ticker.ask,
      last: ticker.last,
      baseVolume: ticker.baseVolume
    };
    // console.log(btcbox.id, ticker);

    await axios.post(`${config.END_POINT}/btcboxs`, ticker)
      .then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
  }
}

getExchangeTicker.getBtcboxTicker();