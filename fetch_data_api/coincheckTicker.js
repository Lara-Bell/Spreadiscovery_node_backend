const ccxt = require('ccxt');
const axios = require('./axios');

const getExchangeTicker = {
  symbol: "BTC/JPY",
  getCoincheckTicker: async function () {
    let coincheck = new ccxt.coincheck();
    let ticker = await coincheck.fetchTicker(this.symbol);
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
    await axios.post(`/coinchecks`, ticker)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }
}

getExchangeTicker.getCoincheckTicker();