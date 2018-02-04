const axios = require('./axios');
const moment = require('moment');
// const END_POINT = `https://public.bitbank.cc`;
// const pair = `btc_jpy`;
// const GET_TICKER = `${END_POINT}/${pair}/ticker`;
const BITBANK_URL = 'https://public.bitbank.cc/btc_jpy/ticker';

axios.get(BITBANK_URL)
  .then((res) => {
    let tickData = res.data.data;
    const ticker = {
      symbol: "BTC/JPY",
      datetime: moment(tickData.timestamp).toISOString(),
      high: Number(tickData.high),
      low: Number(tickData.low),
      bid: Number(tickData.buy),
      ask: Number(tickData.sell),
      last: Number(tickData.last),
      baseVolume: Number(tickData.vol)
    };
    return axios.post(`/bitbanks`, ticker)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));

