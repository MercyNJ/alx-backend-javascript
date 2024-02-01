const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {

  describe('with type SUM', () => {
    it('should add two positive integers', () => {
      assert.strictEqual(calculateNumber('SUM', 5, 10), 15);
    });

    it('should add a positive float and an integer', () => {
      assert.strictEqual(calculateNumber('SUM', 2, 2.7), 5);
    });

    it('should add two negative integers', () => {
      assert.strictEqual(calculateNumber('SUM', -5, -10), -15);
    });

    it('should add a negative float and a positive integer', () => {
      assert.strictEqual(calculateNumber('SUM', -2.5, 3), 1);
    });

    it('should add two zero values', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
  });

  describe('with type SUBTRACT', () => {
    it('should subtract two positive integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 10, 5), 5);
    });

    it('should subtract a positive float from an integer', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 1.5), 0);
    });

    it('should subtract two negative integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -5, -10), 5);
    });

    it('should subtract a negative float from a positive integer', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, -2.5), 5);
    });

    it('should return 0 when subtracting a number from itself', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 7, 7), 0);
    });
  });

  describe('with type DIVIDE', () => {
    it('should divide two positive integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
    });

    it('should divide a positive float by an integer', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.7, 2), 1.5);
    });

    it('should return "Error" when dividing by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should divide a negative integer by a positive float', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -6, 1.5), -3);
    });
  });
});

