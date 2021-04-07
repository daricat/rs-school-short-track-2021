/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const medium = (left, right) => Math.floor((left + right) / 2);

  const find = (left, middle, right) => {
    switch (true) {
      case array[middle] === value:
        return middle;
      case array[middle] > value:
        return find(left, medium(left, middle), middle);
      case array[middle] < value:
        return find(middle, medium(middle, right), right);
      default:
        return 1;
    }
  };

  return find(0, medium(0, array.length), array.length);
}

module.exports = findIndex;
