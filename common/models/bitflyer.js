'use strict';

module.exports = function(Bitflyer) {
  const limitNum = 600;

  Bitflyer.ticker = function(callback) {
    Bitflyer.findOne({order: 'datetime DESC'}, function(err, ticker){
      callback(null, ticker);
    });
  }

  Bitflyer.tickers = function(callback) {
    Bitflyer.find({
      order: 'datetime DESC',
      limit: limitNum
    }, function(err, tickers){
      callback(null, tickers);
    });
  }

  Bitflyer.destroyFunc = function(callback) {
    Bitflyer.count((err, tickers) => {
      const deleteNum = tickers - limitNum; //3794 - 600 = 3194 => ticker {}
      Bitflyer.find({
        order: 'datetime ASC',
        }, (err, models) => {
          const deleteNumTicker = models[deleteNum];
          // console.log(deleteNumTicker.datetime);
          // callback(null, deleteNumTicker);
          Bitflyer.destroyAll({
            datetime: {lt: deleteNumTicker.datetime}
          }, function(err, obj, num) {
            // console.log(deleteNumTicker.datetime);
            callback(null, obj);
        });
      });
    });
  }
};
