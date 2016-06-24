'use strict';

var assert = require('assert');

var calculator = require('./calculator');

describe('Calculator', function() {
  
  it('should add two numbers', function() {
   // assert.equal(calculator.add(1,1), 2);
   assert.equal(calculator.add(2,2,2,2,2,2), 12);
  })

  
  it('should multiply two numbers', function() {
    // your code here
    assert.equal(calculator.multiply(2,1), 2)
  });
  
  // test for divide
 
  // test of remainder
  it('should get the remainder', function () {
  	assert.equal(calculator.remainder(5,3), 2)
  });

  it('should accept string', function () {
  	assert.equal(calculator.addString("1,2,3,4,5"), 15)
  })

  
});