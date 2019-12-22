import { GRID, NUMBERS, N } from "../../typings";
import checkGrid from "../check-grid";
import shuffle from "../shuffle";

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * A backtracking/recusrive function to check all possible combinations of numbers until a solution is found
 */
function fillGrid(grid: GRID) {
  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;

    if (grid[row][col] === 0) {
      shuffle(numbers);
      for (let value of numbers) {
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
            // Identify which of the 9 squares we are working on
            const square: N[][] = [];
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
            // Check that this value has not already been used on this square
            if (
              ![...square[0], ...square[1], ...square[2]].includes(
                value as NUMBERS
              )
            ) {
              grid[row][col] = value as NUMBERS;
              if (checkGrid(grid)) return true;
              else if (fillGrid(grid)) return true;
            }
          }
        }
      }
      break;
    }
  }
  grid[row][col] = 0;
}

export default fillGrid;
