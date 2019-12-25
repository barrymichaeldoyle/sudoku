import { getRandomIndex, solveGrid } from 'utils'
import { GRID, INDEX } from 'typings'

function removeNumbers(grid: GRID): GRID {
  console.log('test')

  let attempts = 5
  let counter = 1

  while (attempts > 0) {
    let row = getRandomIndex()
    let col = getRandomIndex()

    while (grid[row][col] === 0) {
      row = getRandomIndex()
      col = getRandomIndex()
    }

    const backup = grid[row][col]
    grid[row][col] = 0

    console.log({ cell: grid[row][col], grid, col, row })

    const gridCopy: any[] = []
    for (let r: INDEX = 0; r < 9; r++) {
      gridCopy[r] = []
      for (let c: INDEX = 0; c < 9; c++) gridCopy[r][c] = grid[r][c]
    }

    counter = solveGrid(gridCopy as GRID, counter).counter

    if (counter !== 1) {
      grid[row][col] = backup
      attempts -= 1
    }
  }

  return grid as GRID
}

export default removeNumbers
