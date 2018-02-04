'use strict';

module.exports = function(Quoinex) {
  const limitNum = 600;

  Quoinex.ticker = function(callback) {
    Quoinex.findOne({order: 'datetime DESC'}, function(err, ticker){
      callback(null, ticker);
    });
  }
  Quoinex.remoteMethod('ticker',{
    returns: {arg: 'Quoinex', type: 'object'},
    http: {path: '/ticker', verb: 'get'}
  });

  Quoinex.tickers = function(callback) {
    Quoinex.find({
      order: 'datetime DESC',
      limit: limitNum
    }, function(err, tickers){
      callback(null, tickers);
    });
  }
  Quoinex.remoteMethod('tickers',{
    returns: {arg: 'Quoinex', type: 'object'},
    http: {path: '/tickers', verb: 'get'}
  });

  Quoinex.deleteTickers = function(callback) {
    Quoinex.count((err, tickers) => {
      const deleteNum = tickers - limitNum; //3794 - 600 = 3194 => ticker {}
      Quoinex.find({
        order: 'datetime ASC',
        }, (err, models) => {
          const deleteNumTicker = models[deleteNum];
          Quoinex.destroyAll({
            datetime: {lt: deleteNumTicker.datetime}
          }, function(err, obj, num) {
            callback(null, obj);
        });
      });
    });
  }
  Quoinex.remoteMethod('deleteTickers',{
    returns: {arg: 'Quoinex', type: 'object'},
    http: {path: '/deleteTickers', verb: 'delete'}
  });
};
