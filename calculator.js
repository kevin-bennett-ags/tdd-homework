'use strict';

exports.add = function(val1, val2) {
  // your code here. 
  var total = 0;

 for(var i in arguments){
 	total+=arguments[i]; 
 }
  return total;
}

exports.multiply = function(val1, val2) {
  return Number(val1) * Number(val2);
}

exports.addString = function(val1) {
	var arr = val1.split(",");
	var total = 0;
	for(var i in arr){
		console.log(parseInt(arr[i]));
		total+=parseInt(arr[i]);
	}
	return total;
}
// behavior for divide


// bahavior for remainder
exports.remainder = function(val1, val2) {
	return Number(val1) % Number(val2);
}

