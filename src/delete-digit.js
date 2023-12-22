const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/*n*/) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let str = String(n).split('').map(Number);
  // return Math.max(...str.map((el,i)=>{let result = s.slice();result.splice(i,1);return Number( result.join(''))
  // }))
}

module.exports = {
  deleteDigit
};
