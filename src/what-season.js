const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let season = ['spring', 'summer', 'autumn', 'winter' ];
  let month = date.getMonth();
  switch(month){
    case 12:
    case 1:
    case 2:
      return season[3];
    case 3:
    case 4:
    case 5:
      return season[0];
    case 6:
    case 7:
    case 8:
      return season[1];
    case 9:
    case 10:
    case 11:
      return season[2];    
  }
}

module.exports = {
  getSeason
};
