import { isPalindrome } from './palindrome';

describe('isPalindrom', function () {
  it('should return true if the valiue is malayalam', () => {
    const result = isPalindrome('malayalam');
    expect(result).toBe(true);
  });

  it(`should return true if the value is abc`, () => {
    const result = isPalindrome('abc');
    expect(result).toBe(false);
  });

  it('should return true if the value is nurses run', () => {
    const result = isPalindrome('nurses run');
    expect(result).toBe(true);
  });

  it('should return ture if the value is Aba', () => {
    const result = isPalindrome('Aba');
    expect(result).toBe(true);
  });

  it('should return ture if the value is a1a', () => {
    const result = isPalindrome('a1a');
    expect(result).toBe(true);
  });
});
