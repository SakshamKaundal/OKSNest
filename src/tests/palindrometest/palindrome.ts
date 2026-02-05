export const isPalindrome = (word: string) => {
  const wordWithoutSpaces = word.replace(/\s/g, '').toLowerCase();

  const reversedWord = [...wordWithoutSpaces].reverse().join('');
  return reversedWord === wordWithoutSpaces;
};
