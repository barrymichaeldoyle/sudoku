import { GRID, NUMBERS } from 'typings'

interface IInput {
  col: number
  grid: GRID
  value: NUMBERS
}

/**
 * A function that returns true if the value is already being used in the current grid column.
 * @param input Object with 9X9 Sudoku Grid, col index and value.
 */
function isInCol({ col, grid, value }: IInput): boolean {
  for (let i = 0; i < 9; i++) if (value === grid[i][col]) return true
  return false
}

export default isInCol
