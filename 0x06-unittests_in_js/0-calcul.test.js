const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
    it('rounding numbers and returning their sum', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('rounding down with a float', () => {
        assert.strictEqual(calculateNumber(1.5, 2.3), 4);
    });

    it('rounding down with both floats', () => {
        assert.strictEqual(calculateNumber(1.4, 2.3), 3);
    });

    it('rounding up with both floats', () => {
        assert.strictEqual(calculateNumber(1.6, 2.3), 4);
    });

    it('when both values are 0', () => {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });

    it('rounding up with negative values', () => {
        assert.strictEqual(calculateNumber(-1.6, -2.3), -4);
    });

    it('rounding down with negative values', () => {
        assert.strictEqual(calculateNumber(-1.5, -2.3), -3);
    });

    it('rounding up with one negative value', () => {
        assert.strictEqual(calculateNumber(-1.4, 2.3), 1);
    });
});
