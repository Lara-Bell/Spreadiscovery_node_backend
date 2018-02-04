const axiosBase = require('axios');
const config = require('../.config.json');
module.exports = axiosBase.create({
  baseURL: config.END_POINT,
  headers: {
    'ContentType': 'application/json',
    'Authorization': config.ACCESS_TOKEN
  },
  responseType: 'json'
});
