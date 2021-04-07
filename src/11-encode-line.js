/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return '';
  const strArr = str.split('');
  let currentLetter = strArr[0];

  for (let i = 0; i < strArr.length; i += 1) {
    if (strArr[i] !== currentLetter) {
      currentLetter = strArr[i];
      strArr.splice(i, 0, '-');
    }
  }

  return strArr.join('')
    .split('-')
    .map((sequence) => `${sequence.length === 1
      ? ''
      : sequence.length}${sequence[0]}`)
    .join('');
}

module.exports = encodeLine;
