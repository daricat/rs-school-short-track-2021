/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const num = String(n).split('');

  const possibleNumbers = new Array(num.length)
    .fill(1)
    .map((element, i) => +num.filter((part, j) => i !== j).join(''))
    .sort((num1, num2) => num2 - num1);

  return possibleNumbers[0];
}

module.exports = deleteDigit;
