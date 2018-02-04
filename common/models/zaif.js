'use strict';

module.exports = function(Zaif) {
  const limitNum = 600;

  Zaif.ticker = function(callback) {
    Zaif.findOne({order: 'datetime DESC'}, function(err, ticker){
      callback(null, ticker);
    });
  }
  Zaif.remoteMethod('ticker',{
    returns: {arg: 'Zaif', type: 'object'},
    http: {path: '/ticker', verb: 'get'}
  });

  Zaif.tickers = function(callback) {
    Zaif.find({
      order: 'datetime DESC',
      limit: limitNum
    }, function(err, tickers){
      callback(null, tickers);
    });
  }
  Zaif.remoteMethod('tickers',{
    returns: {arg: 'Zaif', type: 'object'},
    http: {path: '/tickers', verb: 'get'}
  });

  Zaif.deleteTickers = function(callback) {
    Zaif.count((err, tickers) => {
      const deleteNum = tickers - limitNum; //3794 - 600 = 3194 => ticker {}
      Zaif.find({
        order: 'datetime ASC',
        }, (err, models) => {
          const deleteNumTicker = models[deleteNum];
          Zaif.destroyAll({
            datetime: {lt: deleteNumTicker.datetime}
          }, function(err, obj, num) {
            callback(null, obj);
        });
      });
    });
  }
  Zaif.remoteMethod('deleteTickers',{
    returns: {arg: 'Zaif', type: 'object'},
    http: {path: '/deleteTickers', verb: 'delete'}
  });
};
