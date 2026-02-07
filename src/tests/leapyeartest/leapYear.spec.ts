import { isLeapYear } from './leapYear';

describe('isLeapYear', function () {
  it('should return leap year if the value is 2024', () => {
    const result = isLeapYear(2024);
    expect(result).toBe(true);
  });

  it('should return true if the value is 2000', () => {
    const result = isLeapYear(2000);
    expect(result).toBe(true);
  });

  it('should return false if the value is 1999', () => {
    const result = isLeapYear(1999);
    expect(result).toBe(false);
  });
});
