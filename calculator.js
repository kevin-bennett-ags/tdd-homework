'use strict';

exports.add = function(strArr) {
  var numArr = strArr.split(',').map(Number),
      total = 0;

  for(var i = 0, l = numArr.length; i < l; i++) {
    if(numArr[i] < 0) throw new Error('negatives not allowed')
    total += numArr[i];
  }

  return total;
}

exports.multiply = function(val1, val2) {
  return Number(val1) * Number(val2);
}

// behavior for divide
exports.divide = function(val1, val2) {
  var num1 = Number(val1),
      num2 = Number(val2);

  if(num2 === 0) throw new Error('zero is not allowed as divider')
  return num1 / num2;
}

// bahavior for remainder
exports.remainder = function(val1, val2) {
  var num1 = Number(val1),
      num2 = Number(val2);

  if(num2 === 0) throw new Error('zero is not allowed as divider')
  return num1 % num2;
}
