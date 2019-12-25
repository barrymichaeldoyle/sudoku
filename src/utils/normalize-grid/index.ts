import { GRID, NORMALIZED_GRID } from 'typings'

function normalizeGrid(grid: GRID): NORMALIZED_GRID {
  const normalizedGrid: NORMALIZED_GRID = {}

  grid.forEach((row, rowIndex) =>
    row.forEach((col, colIndex) => {
      if (colIndex === 0) normalizedGrid[rowIndex] = {}
      normalizedGrid[rowIndex][colIndex] = col
    })
  )

  return normalizedGrid
}

export default normalizeGrid
