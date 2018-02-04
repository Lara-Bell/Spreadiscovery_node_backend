'use strict';

module.exports = function(Coincheck) {
  const limitNum = 600;

  Coincheck.ticker = function(callback) {
    Coincheck.findOne({order: 'datetime DESC'}, function(err, ticker){
      callback(null, ticker);
    });
  }
  Coincheck.remoteMethod('ticker',{
    returns: {arg: 'Coincheck', type: 'object'},
    http: {path: '/ticker', verb: 'get'}
  });

  Coincheck.tickers = function(callback) {
    Coincheck.find({
      order: 'datetime DESC',
      limit: limitNum
    }, function(err, tickers){
      callback(null, tickers);
    });
  }
  Coincheck.remoteMethod('tickers',{
    returns: {arg: 'Coincheck', type: 'object'},
    http: {path: '/tickers', verb: 'get'}
  });

  Coincheck.deleteTickers = function(callback) {
    Coincheck.count((err, tickers) => {
      const deleteNum = tickers - limitNum; //3794 - 600 = 3194 => ticker {}
      Coincheck.find({
        order: 'datetime ASC',
        }, (err, models) => {
          const deleteNumTicker = models[deleteNum];
          // console.log(deleteNumTicker.datetime);
          // callback(null, deleteNumTicker);
          Coincheck.destroyAll({
            datetime: {lt: deleteNumTicker.datetime}
          }, function(err, obj, num) {
            // console.log(deleteNumTicker.datetime);
            callback(null, obj);
        });
      });
    });
  }

  Coincheck.remoteMethod('deleteTickers',{
    returns: {arg: 'Coincheck', type: 'object'},
    http: {path: '/deleteTickers', verb: 'delete'}
  });
};
