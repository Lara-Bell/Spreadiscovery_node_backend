var p = require('../package.json');
var version = p.version.split('.').shift();
module.exports = {
  // https://localhost.com/api/v1
  // restApiRoot: '/api' + (version > 0 ? '/v' + version : ''),
  // https://api.localhost.com/v1
  restApiRoot: (version > 0 ? '/v' + version : ''),
  // https://api.localhost.com/1
  // restApiRoot: (version > 0 ? '/' + version : ''),
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || 3000
};