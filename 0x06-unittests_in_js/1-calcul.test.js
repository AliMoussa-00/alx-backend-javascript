const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return 5 when inputs are 1.4 and 3.5 with type "SUM"', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 3.5), 5);
  });

  it('should return 0 when inputs are 1.4 and 1.4 with type "SUBTRACT"', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 1.4), 0);
  });

  it('should return "Error" when dividing by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
  });

  it('should return 2 when inputs are 5.5 and 2.2 with type "DIVIDE"', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 5.5, 2.2), 3);
  });

  it('should handle SUM negative numbers correctly', () => {
    assert.strictEqual(calculateNumber('SUM', -1.4, -3.5), -4);
  });
  it('should handle SUB negative numbers correctly', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 3.5), -5);
  });
  it('should handle DIV negative numbers correctly', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -4.5, -2.2), 2);
  });

  it('should handle edge cases with rounding', () => {
    assert.strictEqual(calculateNumber('SUM', 2.49, 2.49), 4);
    assert.strictEqual(calculateNumber('SUM', 2.5, 2.5), 6);
    assert.strictEqual(calculateNumber('SUM', 2.49, 2.5), 5);
  });

  it('should return 5 when inputs are 2.4 and 2.5 with type "SUM"', () => {
    assert.strictEqual(calculateNumber('SUM', 2.4, 2.5), 5);
  });

  it('should return 0 when inputs are -1.4 and 1.4 with type "SUM"', () => {
    assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0);
  });

  it('should return 5 when inputs are 2 and 3 with type "SUM"', () => {
    assert.strictEqual(calculateNumber('SUM', 2, 3), 5);
  });

  it('should return 10 when inputs are 4.6 and 4.5 with type "SUM"', () => {
    assert.strictEqual(calculateNumber('SUM', 4.6, 4.5), 10);
  });

  it('should return 1 when inputs are 0.7 and 0.4 with type "SUM"', () => {
    assert.strictEqual(calculateNumber('SUM', 0.7, 0.4), 1);
  });

  it('should return 0 when inputs are -0.4 and 0.4 with type "SUM"', () => {
    assert.strictEqual(calculateNumber('SUM', -0.4, 0.4), 0);
  });
});
