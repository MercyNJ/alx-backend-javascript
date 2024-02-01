const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {

  describe('with type SUM', () => {
    it('should add two positive integers', () => {
      expect(calculateNumber('SUM', 5, 10)).to.equal(15);
    });

    it('should add a positive float and an integer', () => {
      expect(calculateNumber('SUM', 2, 2.7)).to.equal(5);
    });

    it('should add two negative integers', () => {
      expect(calculateNumber('SUM', -5, -10)).to.equal(-15);
    });

    it('should add a negative float and a positive integer', () => {
      expect(calculateNumber('SUM', -2.5, 3)).to.equal(1);
    });

    it('should add two zero values', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
  });

  describe('with type SUBTRACT', () => {
    it('should subtract two positive integers', () => {
      expect(calculateNumber('SUBTRACT', 10, 5)).to.equal(5);
    });

    it('should subtract a positive float from an integer', () => {
      expect(calculateNumber('SUBTRACT', 2, 1.5)).to.equal(0);
    });

    it('should subtract two negative integers', () => {
      expect(calculateNumber('SUBTRACT', -5, -10)).to.equal(5);
    });

    it('should subtract a negative float from a positive integer', () => {
      expect(calculateNumber('SUBTRACT', 3, -2.5)).to.equal(5);
    });

    it('should return 0 when subtracting a number from itself', () => {
      expect(calculateNumber('SUBTRACT', 7, 7)).to.equal(0);
    });
  });

  describe('with type DIVIDE', () => {
    it('should divide two positive integers', () => {
      expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
    });

    it('should divide a positive float by an integer', () => {
      expect(calculateNumber('DIVIDE', 2.7, 2)).to.equal(1.5);
    });

    it('should return "Error" when dividing by zero', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should divide a negative integer by a positive float', () => {
      expect(calculateNumber('DIVIDE', -6, 1.5)).to.equal(-3);
    });
  });
});
