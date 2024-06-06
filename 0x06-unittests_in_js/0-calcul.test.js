const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when inputs are 1.4 and 2.5', () => {
    assert.strictEqual(calculateNumber(1.4, 2.5), 4);
  });

  it('should return 0 when inputs are 0 and 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should return 5 when inputs are 2.4 and 2.5', () => {
    assert.strictEqual(calculateNumber(2.4, 2.5), 5);
  });

  it('should return -5 when inputs are -2.4 and -2.5', () => {
    assert.strictEqual(calculateNumber(-2.4, -2.5), -4);
  });

  it('should return 0 when inputs are -1.4 and 1.4', () => {
    assert.strictEqual(calculateNumber(-1.4, 1.4), 0);
  });

  it('should return 5 when inputs are 2 and 3', () => {
    assert.strictEqual(calculateNumber(2, 3), 5);
  });

  it('should return 10 when inputs are 4.6 and 4.5', () => {
    assert.strictEqual(calculateNumber(4.6, 4.5), 10);
  });

  it('should return 1 when inputs are 0.7 and 0.4', () => {
    assert.strictEqual(calculateNumber(0.7, 0.4), 1);
  });

  it('should return 0 when inputs are -0.4 and 0.4', () => {
    assert.strictEqual(calculateNumber(-0.4, 0.4), 0);
  });
});
