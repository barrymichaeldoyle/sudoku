import { GRID, NUMBERS } from "typings";
import { checkGrid, identifySquare, shuffle, isInCol } from "utils";

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
        if (!grid[row].includes(value))
          if (!isInCol({ col, grid, value })) {
            const square = identifySquare({ grid, row, col });
            if (![...square[0], ...square[1], ...square[2]].includes(value)) {
              grid[row][col] = value as NUMBERS;
              if (checkGrid(grid)) return true;
              else if (fillGrid(grid)) return true;
            }
          }
      }
      break;
    }
  }
  grid[row][col] = 0;
}

export default fillGrid;
