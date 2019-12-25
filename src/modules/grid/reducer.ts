import { AnyAction } from 'redux'

import { createFullGrid, normalizeGrid, removeNumbers } from 'utils'

import * as types from './types'
import { IReducer } from './interfaces'

const initialState: IReducer = { grid: undefined }

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.CREATE_FULL_GRID: {
      const grid = createFullGrid()
      removeNumbers(grid)
      return { ...state, grid: normalizeGrid(grid) }
    }

    case types.SELECT_BLOCK:
      return { ...state, selectedBlock: action.coords }

    default:
      return state
  }
}

export default reducer
