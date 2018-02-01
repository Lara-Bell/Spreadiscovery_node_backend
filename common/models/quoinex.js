'use strict';

module.exports = function(Quoinex) {
  const limitNum = 600;

  Quoinex.ticker = function(callback) {
    Quoinex.findOne({order: 'datetime DESC'}, function(err, ticker){
      callback(null, ticker);
    });
  }

  Quoinex.tickers = function(callback) {
    Quoinex.find({
      order: 'datetime DESC',
      limit: limitNum
    }, function(err, tickers){
      callback(null, tickers);
    });
  }

  Quoinex.destroyFunc = function(callback) {
    Quoinex.count((err, tickers) => {
      const deleteNum = tickers - limitNum; //3794 - 600 = 3194 => ticker {}
      Quoinex.find({
        order: 'datetime ASC',
        }, (err, models) => {
          const deleteNumTicker = models[deleteNum];
          // console.log(deleteNumTicker.datetime);
          // callback(null, deleteNumTicker);
          Quoinex.destroyAll({
            datetime: {lt: deleteNumTicker.datetime}
          }, function(err, obj, num) {
            // console.log(deleteNumTicker.datetime);
            callback(null, obj);
        });
      });
    });
  }
};
