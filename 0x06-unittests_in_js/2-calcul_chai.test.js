import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', () => {
  it('should return 5 when inputs are 1.4 and 3.5 with type "SUM"', () => {
    expect(calculateNumber('SUM', 1.4, 3.5)).to.equal(5);
  });

  it('should return 0 when inputs are 1.4 and 1.4 with type "SUBTRACT"', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 1.4)).to.equal(0);
  });

  it('should return "Error" when dividing by zero', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
  });

  it('should return 3 when inputs are 5.5 and 2.2 with type "DIVIDE"', () => {
    expect(calculateNumber('DIVIDE', 5.5, 2.2)).to.equal(3);
  });

  it('should handle SUM negative numbers correctly', () => {
    expect(calculateNumber('SUM', -1.4, -3.5)).to.equal(-4);
  });

  it('should handle SUB negative numbers correctly', () => {
    expect(calculateNumber('SUBTRACT', -1.4, 3.5)).to.equal(-5);
  });

  it('should handle DIV negative numbers correctly', () => {
    expect(calculateNumber('DIVIDE', -4.5, -2.2)).to.equal(2);
  });

  it('should handle edge cases with rounding (SUM, 2.49, 2.49)', () => {
    expect(calculateNumber('SUM', 2.49, 2.49)).to.equal(4);
  });

  it('should handle edge cases with rounding (SUM, 2.5, 2.5)', () => {
    expect(calculateNumber('SUM', 2.5, 2.5)).to.equal(6);
  });

  it('should handle edge cases with rounding (SUM, 2.49, 2.5)', () => {
    expect(calculateNumber('SUM', 2.49, 2.5)).to.equal(5);
  });

  it('should return 5 when inputs are 2.4 and 2.5 with type "SUM"', () => {
    expect(calculateNumber('SUM', 2.4, 2.5)).to.equal(5);
  });

  it('should return 0 when inputs are -1.4 and 1.4 with type "SUM"', () => {
    expect(calculateNumber('SUM', -1.4, 1.4)).to.equal(0);
  });

  it('should return 5 when inputs are 2 and 3 with type "SUM"', () => {
    expect(calculateNumber('SUM', 2, 3)).to.equal(5);
  });

  it('should return 10 when inputs are 4.6 and 4.5 with type "SUM"', () => {
    expect(calculateNumber('SUM', 4.6, 4.5)).to.equal(10);
  });

  it('should return 1 when inputs are 0.7 and 0.4 with type "SUM"', () => {
    expect(calculateNumber('SUM', 0.7, 0.4)).to.equal(1);
  });

  it('should return 0 when inputs are -0.4 and 0.4 with type "SUM"', () => {
    expect(calculateNumber('SUM', -0.4, 0.4)).to.equal(0);
  });
});
