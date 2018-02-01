const config = require('./config');
const ccxt = require('ccxt');
const axios = require('axios');

const getExchangeTicker = {
  symbol: "BTC/JPY",
  getZaifTicker: async function () {
    let zaif = new ccxt.zaif();
    let ticker = await zaif.fetchTicker(this.symbol);
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
    // console.log(zaif.id, ticker);
    await axios.post(`${config.END_POINT}/zaifs`, ticker)
      .then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
  }
}

getExchangeTicker.getZaifTicker();