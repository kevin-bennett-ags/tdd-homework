'use strict';

var assert = require('assert');

var calculator = require('./calculator');

describe('Calculator', function() {
  
  it('should add two numbers', function() {
    assert.equal(calculator.add(1,1), 2);
  });
  
  
  it('should multiply two numbers', function() {
    assert.equal(calculator.multiply(2,2), 4);
  });
  
  // test of remainder
  it('should get the remainder', function() {
    console.log(calculator.remainder(9,2));
  });

  
  
  
  
});