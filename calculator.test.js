'use strict';

const assert = require('assert');
const calculator = require('./calculator');

describe('Calculator', function() {

  describe('#add()', function() {
    it('should add two numbers', function() {
      assert.equal(calculator.add('1,2,3,4,5'), 15);
    });
    it('should throw error for negative number', function() {
      assert.throws(() => {
        return calculator.add('1,2,3,4,-5');
      }, Error, 'negatives not allowed');
    });
  })

  describe('#multiply()', function() {
    it('should multiply two numbers', function() {
      assert.equal(calculator.multiply(3, 4), 12);
    });
  });

  // test for divide
  describe('#divide()', function() {
    it('should divide two numbers', function() {
      assert.equal(calculator.divide(12, 4), 3);
    });
    it('should throw error for zero divider', function() {
      assert.throws(() => {
        return calculator.divide(12, 0);
      }, Error, 'zero is not allowed as divider');
    });
  });

  // test of remainder
  describe('#remainder()', function() {
    it('should get remainder for division of two numbers', function() {
      assert.equal(calculator.remainder(12, 5), 2);
    });
    it('should throw error for zero divider', function() {
      assert.throws(() => {
        return calculator.remainder(12, 0);
      }, Error, 'zero is not allowed as divider');
    });
  });
});
