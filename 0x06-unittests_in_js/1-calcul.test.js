const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    it('returns rounded sum', () => {
        assert.equal(calculateNumber('SUM', 1, 3), 4);
    });
    it('returns rounded sum', () => {
        assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
    it('returns rounded sum', () => {
        assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    });
    it('returns rounded subtract', () => {
        assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });
    it('returns rounded subtract', () => {
        assert.equal(calculateNumber('SUBTRACT', 1.4, 3.7), -3);
    });
    it('returns a rounded divide', () => {
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('returns a rounded divide', () => {
        assert.equal(calculateNumber('DIVIDE', 1.5, 3), 0.67);
    });
    it('returns a rounded divide', () => {
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
});