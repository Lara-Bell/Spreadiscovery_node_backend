const config = require('./config');
const ccxt = require('ccxt');
const axios = require('axios');

const getExchangeTicker = {
  symbol: "BTC/JPY",
  getQuoinexTicker: async function () {
    let quoinex = new ccxt.quoinex();
    let ticker = await quoinex.fetchTicker(this.symbol);
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
    // console.log(quoinex.id, ticker);
    await axios.post(`${config.END_POINT}/quoinexs`, ticker)
      .then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
  }
}
getExchangeTicker.getQuoinexTicker();