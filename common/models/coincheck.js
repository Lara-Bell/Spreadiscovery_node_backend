'use strict';

module.exports = function(Coincheck) {
  const limitNum = 600;

  Coincheck.ticker = function(callback) {
    Coincheck.findOne({order: 'datetime DESC'}, function(err, ticker){
      callback(null, ticker);
    });
  }

  Coincheck.tickers = function(callback) {
    Coincheck.find({
      order: 'datetime DESC',
      limit: limitNum
    }, function(err, tickers){
      callback(null, tickers);
    });
  }

  Coincheck.destroyFunc = function(callback) {
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
};
