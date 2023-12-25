const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // options.repeatTimes = 1
  // options.additionRepeatTimes = 1;
  // options.separator = '**';
  // options.addition = 'PLUS';
  // let result = '';
  //  for(let i = 0; i < options.repeatTimes; i++){
  //   result += str;
  //    console.log(result);
  //   for(let j = 0 ; j < options.additionRepeatTimes; j++){
  //      result += options.addition;
  //      result += options.additionSeparator;
  //   }
  //   if(i !== options.repeatTimes - 1){
  //     result += options.separator;
  //   }
  // }
  // return result;
}

module.exports = {
  repeater
};
