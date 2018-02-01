'use strict';

module.exports = function(Zaif) {
  const limitNum = 600;

  Zaif.ticker = function(callback) {
    Zaif.findOne({order: 'datetime DESC'}, function(err, ticker){
      callback(null, ticker);
    });
  }

  Zaif.tickers = function(callback) {
    Zaif.find({
      order: 'datetime DESC',
      limit: limitNum
    }, function(err, tickers){
      callback(null, tickers);
    });
  }

  Zaif.destroyFunc = function(callback) {
    Zaif.count((err, tickers) => {
      const deleteNum = tickers - limitNum; //3794 - 600 = 3194 => ticker {}
      Zaif.find({
        order: 'datetime ASC',
        }, (err, models) => {
          const deleteNumTicker = models[deleteNum];
          // console.log(deleteNumTicker.datetime);
          // callback(null, deleteNumTicker);
          Zaif.destroyAll({
            datetime: {lt: deleteNumTicker.datetime}
          }, function(err, obj, num) {
            // console.log(deleteNumTicker.datetime);
            callback(null, obj);
        });
      });
    });
  }
};
