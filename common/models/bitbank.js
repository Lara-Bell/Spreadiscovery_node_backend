'use strict';
module.exports = function(Bitbank) {

  const limitNum = 600;

  Bitbank.ticker = function(callback) {
    Bitbank.findOne({order: 'datetime DESC'}, function(err, model){
      callback(null, model);
    });
  }

  Bitbank.tickers = function(callback) {
    Bitbank.find({
      order: 'datetime DESC',
      limit: limitNum
    }, function(err, tickers){
      callback(null, tickers);
    });
  }

  Bitbank.destroyFunc = function(callback) {
    Bitbank.count((err, tickers) => {
      const deleteNum = tickers - limitNum; //3794 - 600 = 3194 => ticker {}
      Bitbank.find({
        order: 'datetime ASC',
        }, (err, models) => {
          const deleteNumTicker = models[deleteNum];
          // console.log(deleteNumTicker.datetime);
          // callback(null, deleteNumTicker);
          Bitbank.destroyAll({
            datetime: {lt: deleteNumTicker.datetime}
          }, function(err, obj, num) {
            // console.log(deleteNumTicker.datetime);
            callback(null, obj);
        });
      });
    });
  }
};
