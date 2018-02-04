const ccxt = require('ccxt');
const axios = require('./axios');

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
    await axios.post(`/quoinexs`, ticker)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }
}
getExchangeTicker.getQuoinexTicker();