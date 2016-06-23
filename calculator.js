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

exports.addString = function(val) {
	var qc = val.split(",");
	var sum=0;
	if(val=="") return 0;
	for(var i=0;i<qc.length;i++){
		sum+= Number(qc[i]); 
	}		  
  	return sum;
}

