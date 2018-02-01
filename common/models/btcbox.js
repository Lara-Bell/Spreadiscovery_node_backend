'use strict';

module.exports = function(Btcbox) {
  const limitNum = 600;

  Btcbox.ticker = function(callback) {
    Btcbox.findOne({order: 'datetime DESC'}, function(err, ticker){
      callback(null, ticker);
    });
  }

  Btcbox.tickers = function(callback) {
    Btcbox.find({
      order: 'datetime DESC',
      limit: limitNum
    }, function(err, tickers){
      callback(null, tickers);
    });
  }
  Btcbox.destroyFunc = function(callback) {
    Btcbox.count((err, tickers) => {
      const deleteNum = tickers - limitNum; //3794 - 600 = 3194 => ticker {}
      Btcbox.find({
        order: 'datetime ASC',
        }, (err, models) => {
          const deleteNumTicker = models[deleteNum];
          // console.log(deleteNumTicker.datetime);
          // callback(null, deleteNumTicker);
          Btcbox.destroyAll({
            datetime: {lt: deleteNumTicker.datetime}
          }, function(err, obj, num) {
            // console.log(deleteNumTicker.datetime);
            callback(null, obj);
        });
      });
    });
  }
};
