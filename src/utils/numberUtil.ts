/**File Desc: Contains utility function(s) for number validation */

export const getPercentage = (dividend: number, divisor: number): number => {
  return Math.floor((dividend / divisor) * 100);
};
