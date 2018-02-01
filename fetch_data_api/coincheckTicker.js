const config = require('./config');
const ccxt = require('ccxt');
const axios = require('axios');

const getExchangeTicker = {
  symbol: "BTC/JPY",
  getCoincheckTicker: async function () {
    let coincheck = new ccxt.coincheck();
    let ticker = await coincheck.fetchTicker(this.symbol);
    // console.log(coincheck.id, JSON.stringify(ticker));
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
    // console.log(coincheck.id, ticker);

    await axios.post(`${config.END_POINT}/coinchecks`, ticker)
      .then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
  }
}

getExchangeTicker.getCoincheckTicker();