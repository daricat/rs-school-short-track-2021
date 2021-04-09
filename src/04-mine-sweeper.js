/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const formCoords = [
    [-1, +0],
    [-1, +1],
    [+0, +1],
    [+1, +1],
    [+1, +0],
    [+1, -1],
    [+0, -1],
    [-1, -1],
  ];
  const getCoordsNearestPoints = (row, column) => {
    const coords = formCoords.map((coord) => [
      row + coord[0],
      column + coord[1],
    ]);
    return coords.filter((coord) => coord.every(
      (el) => (el >= 0 && el < matrix.length) || (el >= 0 && el < matrix.length),
    ));
  };

  const resultMatix = JSON.parse(JSON.stringify(matrix));

  matrix.forEach((row, i) => {
    row.forEach((cell, j) => {
      resultMatix[i][j] = 0;
      getCoordsNearestPoints(i, j).forEach((coord) => {
        if (matrix[coord[0]][coord[1]] === true) {
          resultMatix[i][j] += 1;
        }
      });
    });
  });

  return resultMatix;
}

module.exports = minesweeper;
