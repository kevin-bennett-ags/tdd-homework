'use strict';

exports.add = function(val1,val2) {
  return Number(val1) + Number(val2);
}

exports.multiply = function(val1, val2) {
  return Number(val1) * Number(val2);
}

// bahavior for remainder
exports.remainder = function(val1, val2) {
  return Number(val1) % Number(val2);
}
