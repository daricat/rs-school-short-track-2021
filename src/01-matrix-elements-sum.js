/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const arr = [...matrix];

  const replacer = (row, column) => {
    let currentRow = row;
    while ((currentRow + 1) < arr.length) {
      arr[currentRow + 1][column] = 'x';
      currentRow += 1;
    }
  };

  return arr
    .map((rowElement, i) => rowElement.map((columnElement, j) => {
      if (columnElement === 0) {
        replacer(i, j);
        return 'x';
      }
      return columnElement;
    }))
    .flat()
    .filter((element) => element !== 'x')
    .reduce((sum, int) => sum + int, 0);
}

module.exports = getMatrixElementsSum;
