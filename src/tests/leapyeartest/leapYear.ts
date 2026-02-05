export const isLeapYear = (n: number) => {
  if (n % 4 == 0 && n % 100 != 0) return true;
  return n % 400 == 0;
};
