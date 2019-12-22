import { GRID, NUMBERS } from "typings";
import { checkGrid, identifySquare } from "utils";

/**
 * A backtracking/recusrive function to check all possible combinations of numbers until a solution is found
 * @param grid A 9X9 array consisting of values from 0-9
 */
function solveGrid(grid: GRID) {
  let counter = 0;
  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;

    if (grid[row][col] === 0) {
      for (let value = 1; value < 10; value++) {
        // Check that this value has not already been used on this row
        if (!grid[row].includes(value as NUMBERS)) {
          // Check that this value has not already been used on this column
          if (
            ![
              grid[0][col],
              grid[1][col],
              grid[2][col],
              grid[3][col],
              grid[4][col],
              grid[5][col],
              grid[6][col],
              grid[7][col],
              grid[8][col]
            ].includes(value as NUMBERS)
          ) {
            const square = identifySquare({ grid, row, col });
            // Check that this value has not already been used on this square
            if (
              ![...square[0], ...square[1], ...square[2]].includes(
                value as NUMBERS
              )
            ) {
              grid[row][col] = value as NUMBERS;
              if (checkGrid(grid)) {
                counter++;
                break;
              } else if (solveGrid(grid)) return true;
            }
          }
        }
      }
      break;
    }
  }
  grid[row][col] = 0;
}

export default solveGrid;
