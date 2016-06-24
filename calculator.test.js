'use strict';

var assert = require('assert');

var calculator = require('./calculator');

describe('Calculator', function() {
  
  it('should add two numbers', function() {
    assert.equal(calculator.add(1,1), 2);
  });

  
  it('should multiply two numbers', function() {
    // your code here
    assert.equal(calculator.multiply(2,1), 2)
  });
  
  // test for divide

 
  // test of remainder

  
});