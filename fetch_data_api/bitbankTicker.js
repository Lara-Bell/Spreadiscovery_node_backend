// const axiosBase = require('axios');

// const axios = axiosBase.create({
//   headers: {
//     'ContentType': 'application/json',
//     'X-Requested-With': 'XMLHttpRequest'
//   },
//   responseType: 'json'
// });
const config = require('./config');
const axios = require('axios');
const moment = require('moment');
const END_POINT = `https://public.bitbank.cc`;
const pair = `btc_jpy`;
const GET_TICKER = `${END_POINT}/${pair}/ticker`;

axios.get(GET_TICKER)
  .then((res) => {
    // console.log(res.data.data.sell);
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

    return axios.post(`${config.END_POINT}/bitbanks`, ticker)
      .then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
  }).catch((err) => {
    console.log(err);
  });

