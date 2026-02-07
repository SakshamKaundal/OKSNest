import { fizzBuzz } from './fizzbuzz';

describe('fizzBuzz', function () {
  it('should return an empty string if the number is neither divided by 3 nor 5', () => {
    const result = fizzBuzz(1);
    expect(result).toBe('');
  });

  it('should return fizz when', () => {
    const result = fizzBuzz(1);
    expect(result).toBe('');
  });
});
