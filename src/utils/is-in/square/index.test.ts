import { SQUARE } from 'typings'

import isInRow from './'

describe('isInRow', () => {
  it('returns true when value is in grid row', () => {
    const square: SQUARE = [
      [1, 3, 4],
      [8, 2, 7],
      [6, 9, 5],
    ]

    expect(isInRow({ square, value: 1 })).toBeTruthy()
    expect(isInRow({ square, value: 9 })).toBeTruthy()
  })

  it('returns false when value is not in grid row', () => {
    const square: SQUARE = [
      [0, 3, 4],
      [8, 2, 7],
      [6, 0, 5],
    ]

    expect(isInRow({ square, value: 1 })).toBeFalsy()
    expect(isInRow({ square, value: 9 })).toBeFalsy()
  })
})
