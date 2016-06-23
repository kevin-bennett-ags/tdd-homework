'use strict';

exports.add = function() {
	 var sum=0;
	 for(var param in arguments){
	 	sum+=Number(arguments[param]);
	 }
	 return sum;
}

exports.multiply = function(val1, val2) {
  return Number(val1) * Number(val2);
}

// bahavior for remainder
exports.remainder = function(val1, val2) {
  return Number(val1) % Number(val2);
}
