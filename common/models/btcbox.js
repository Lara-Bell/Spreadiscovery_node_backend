'use strict';

module.exports = function(Btcbox) {
  const limitNum = 600;

  Btcbox.ticker = function(callback) {
    Btcbox.findOne({order: 'datetime DESC'}, function(err, ticker){
      callback(null, ticker);
    });
  }
  Btcbox.remoteMethod('ticker',{
    returns: {arg: 'Btcbox', type: 'object'},
    http: {path: '/ticker', verb: 'get'}
  });

  Btcbox.tickers = function(callback) {
    Btcbox.find({
      order: 'datetime DESC',
      limit: limitNum
    }, function(err, tickers){
      callback(null, tickers);
    });
  }
  Btcbox.remoteMethod('tickers',{
    returns: {arg: 'Btcbox', type: 'object'},
    http: {path: '/tickers', verb: 'get'}
  });

  Btcbox.deleteTickers = function(callback) {
    Btcbox.count((err, tickers) => {
      const deleteNum = tickers - limitNum;
      Btcbox.find({
        order: 'datetime ASC',
        }, (err, models) => {
          const deleteNumTicker = models[deleteNum];
          Btcbox.destroyAll({
            datetime: {lt: deleteNumTicker.datetime}
          }, function(err, obj, num) {
            callback(null, obj);
        });
      });
    });
  }
  Btcbox.remoteMethod('deleteTickers',{
    returns: {arg: 'Btcbox', type: 'object'},
    http: {path: '/deleteTickers', verb: 'delete'}
  });
};
