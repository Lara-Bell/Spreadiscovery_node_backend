'use strict';

module.exports = {
  SYMBOL: "BTC/JPY",
  END_POINT: 'http://localhost:4000/api',
  // getTicker: async function(broker) {
  //   let ccxtBroker = new ccxt.broker();
  //   let ticker = await ccxtBroker.fetchTicker(this.symbol);
  //   // console.log(coincheck.id, JSON.stringify(ticker));
  //   ticker = {
  //     symbol: ticker.symbol,
  //     datetime: ticker.datetime,
  //     high: ticker.high,
  //     low: ticker.low,
  //     bid: ticker.bid,
  //     ask: ticker.ask,
  //     last: ticker.last,
  //     baseVolume: ticker.baseVolume
  //   };
  //   // console.log(coincheck.id, ticker);

  //   await axios.post(`${this.END_POINT}/${broker}s`, ticker)
  //     .then(function (response) {
  //       console.log(response);
  //     }).catch(function (error) {
  //       console.log(error);
  //     });
  // }
};