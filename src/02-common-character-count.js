/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const uniqueLetters = [...new Set(s1.split(''))];
  const arrStr1 = s1.split('');
  const arrStr2 = s2.split('');

  const counter = (arr, letter) => arr.filter((element) => element === letter).length;

  return uniqueLetters.reduce((countRepeat, letter) => {
    let count1 = 0;
    let count2 = 0;

    if (arrStr2.includes(letter)) {
      count1 = counter(arrStr1, letter);
      count2 = counter(arrStr2, letter);
    }

    return count1 > count2 ? countRepeat + count2 : countRepeat + count1;
  }, 0);
}

module.exports = getCommonCharacterCount;
