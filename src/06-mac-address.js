/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const macAddres = n.split('-');
  const hexadecimalLetters = /[ABCDEF]/g;
  const hexadecimalNumbers = /\d/g;

  if (macAddres.length !== 6) return false;

  return macAddres.every((part) => (part.length !== 2
    ? false
    : (hexadecimalLetters.test(part) && hexadecimalNumbers.test(part))
      || /^[ABCDEF]{2}$/g.test(part)
      || /^\d{2}$/g.test(part)));
}

module.exports = isMAC48Address;
