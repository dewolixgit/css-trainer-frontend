import { isEqualNumber } from '../number/isEqualNumber';

describe('isEqualNumber', () => {
  it('should return true when numbers are equal without tolerance', () => {
    expect(isEqualNumber(5, 5)).toBe(true);
  });

  it('should return false when numbers are not equal without tolerance', () => {
    expect(isEqualNumber(5, 10)).toBe(false);
  });

  it('should return true when numbers are equal within tolerance', () => {
    expect(isEqualNumber(5.1, 5.2, { tolerance: 0.2 })).toBe(true);
  });

  it('should return false when numbers are not equal within tolerance', () => {
    expect(isEqualNumber(5.1, 5.2, { tolerance: 0.05 })).toBe(false);
  });
});
