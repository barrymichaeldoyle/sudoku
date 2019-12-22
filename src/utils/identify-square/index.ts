import { GRID, SQUARE } from "typings";

interface IInput {
  grid: GRID;
  row: number;
  col: number;
}

/**
 * A function that identifies and returns the current square of a given sudoku grid at a row and column index.
 * @param input Object with 9X9 Sudoku Grid, row index and col index.
 */
function identifyWorkingSquare({ col, grid, row }: IInput): SQUARE {
  const square = [];
  if (row < 3) {
    if (col < 3)
      for (let x = 0; x < 3; x++)
        square.push([grid[x][0], grid[x][1], grid[x][2]]);
    else if (col < 6)
      for (let x = 0; x < 3; x++)
        square.push([grid[x][3], grid[x][4], grid[x][5]]);
    else
      for (let x = 0; x < 3; x++)
        square.push([grid[x][6], grid[x][7], grid[x][8]]);
  } else if (row < 6) {
    if (col < 3)
      for (let x = 3; x < 6; x++)
        square.push([grid[x][0], grid[x][1], grid[x][2]]);
    else if (col < 6)
      for (let x = 3; x < 6; x++)
        square.push([grid[x][3], grid[x][4], grid[x][5]]);
    else
      for (let x = 3; x < 6; x++)
        square.push([grid[x][6], grid[x][7], grid[x][8]]);
  } else {
    if (col < 3)
      for (let x = 6; x < 9; x++)
        square.push([grid[x][0], grid[x][1], grid[x][2]]);
    else if (col < 6)
      for (let x = 6; x < 9; x++)
        square.push([grid[x][3], grid[x][4], grid[x][5]]);
    else
      for (let x = 6; x < 9; x++)
        square.push([grid[x][6], grid[x][7], grid[x][8]]);
  }

  return square as SQUARE;
}

export default identifyWorkingSquare;
