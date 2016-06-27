'use strict';

const NEGATIVE_ERROR = 'negatives not allowed',
      ZERO_ERROR = 'zero is not allowed as divider';

exports.add = function(strArr) {
  let numArr = strArr.split(',').map(Number),
      total = 0;

  for(let num of numArr) {
    if(num < 0) throw new Error(NEGATIVE_ERROR)
    total += num;
  }

  return total;
}

exports.multiply = function(val1, val2) {
  return Number(val1) * Number(val2);
}

// behavior for divide
exports.divide = function(val1, val2) {
  let num1 = Number(val1),
      num2 = Number(val2);

  if(num2 === 0) throw new Error(ZERO_ERROR)
  return num1 / num2;
}

// bahavior for remainder
exports.remainder = function(val1, val2) {
  let num1 = Number(val1),
      num2 = Number(val2);

  if(num2 === 0) throw new Error(ZERO_ERROR)
  return num1 % num2;
}
