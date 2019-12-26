import { GRID, INDEX } from 'typings'

/**
 * Performs a deep copy on a 9x9 sudoku grid
 * @param grid a 9x9 sudoku grid to be copied
 */
function copyGrid(grid: GRID): GRID {
  const gridCopy: GRID = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]
  for (let r: INDEX = 0; r < 9; r++) {
    gridCopy[r] = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let c: INDEX = 0; c < 9; c++) gridCopy[r][c] = grid[r][c]
  }

  return gridCopy
}

export default copyGrid
