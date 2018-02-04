'use strict';
module.exports = function(Bitbank) {

  const limitNum = 600;

  Bitbank.ticker = function(callback) {
    Bitbank.findOne({order: 'datetime DESC'}, function(err, ticker){
      callback(null, ticker);
    });
  }
  Bitbank.remoteMethod('ticker',{
    returns: {arg: 'Bitbank', type: 'object'},
    http: {path: '/ticker', verb: 'get'}
  });

  Bitbank.tickers = function(callback) {
    Bitbank.find({
      order: 'datetime DESC',
      limit: limitNum
    }, function(err, tickers){
      callback(null, tickers);
    });
  }
  Bitbank.remoteMethod('tickers',{
    returns: {arg: 'Bitbank', type: 'object'},
    http: {path: '/tickers', verb: 'get'}
  });

  Bitbank.deleteTickers = function(callback) {
    Bitbank.count((err, tickers) => {
      const deleteNum = tickers - limitNum;
      Bitbank.find({
        order: 'datetime ASC',
        }, (err, models) => {
          const deleteNumTicker = models[deleteNum];
          Bitbank.destroyAll({
            datetime: {lt: deleteNumTicker.datetime}
          }, function(err, obj, num) {
            callback(null, obj);
        });
      });
    });
  }
  Bitbank.remoteMethod('deleteTickers',{
    returns: {arg: 'Bitbank', type: 'object'},
    http: {path: '/deleteTickers', verb: 'delete'}
  });

};
