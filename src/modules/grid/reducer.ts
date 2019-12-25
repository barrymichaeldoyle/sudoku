import { AnyAction } from 'redux'

import { createFullGrid, normalizeGrid } from 'utils'

import * as types from './types'
import { IReducer } from './interfaces'

const initialState: IReducer = { grid: undefined }

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.CREATE_FULL_GRID:
      return { ...state, grid: normalizeGrid(createFullGrid()) }

    default:
      return state
  }
}

export default reducer
