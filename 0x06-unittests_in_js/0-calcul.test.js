const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('returns rounded sum', () => {
        assert.equal(calculateNumber(1, 3), 4);
    });
    it('returns rounded sum', () => {
        assert.equal(calculateNumber(1, 3.7), 5);
    });
    it('returns rounded sum', () => {
        assert.equal(calculateNumber(1.2, 3.7), 5);
    });
    it('returns rounded sum', () => {
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });
    it('returns rounded sum', () => {
        assert.equal(calculateNumber(1.4, 3.7), 5);
    });
    it('returns rounded sum', () => {
        assert.equal(calculateNumber(1.6, 3.7), 6);
    });
    it('returns rounded sum', () => {
        assert.equal(calculateNumber(1.5, 3), 5);
    });
    it('returns rounded sum', () => {
        assert.equal(calculateNumber(1.4, 3), 4);
    });
    it('returns rounded sum', () => {
        assert.equal(calculateNumber(1.6, 3), 5);
    });
    it('returns rounded sum', () => {
        assert.equal(calculateNumber(1.5, 3.2), 5);
    });
    it('returns rounded sum', () => {
        assert.equal(calculateNumber(1.4, 3.2), 4);
    });
    it('returns rounded sum', () => {
        assert.equal(calculateNumber(1.6, 3.2), 5);
    });
    it('returns rounded sum', () => {
        assert.equal(calculateNumber(1, 3.7), 5);
    });
    it('returns rounded sum', () => {
        assert.equal(calculateNumber(1.4, 3.5), 5);
    });
    it('returns rounded sum', () => {
        assert.equal(calculateNumber(1.6, 3.5), 6);
    });
    it('returns rounded sum', () => {
        assert.equal(calculateNumber(1.5, 3.6), 6);
    });
    it('returns rounded sum', () => {
        assert.equal(calculateNumber(1.4, 3.6), 5);
    });
    it('returns rounded sum', () => {
        assert.equal(calculateNumber(1.6, 3.6), 6);
    });
});