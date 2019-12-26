import { AnyAction } from 'redux'

import { copyGrid, createFullGrid, removeNumbers } from 'utils'

import * as types from './types'
import { IReducer } from './interfaces'

const initialState: IReducer = {}

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.CREATE_FULL_GRID: {
      const solvedGrid = createFullGrid()
      const copiedGrid = copyGrid(solvedGrid)
      const challengeGrid = removeNumbers(copiedGrid)
      return {
        ...state,
        challengeGrid,
        solvedGrid,
        workingGrid: copyGrid(challengeGrid),
      }
    }

    case types.SELECT_BLOCK:
      return { ...state, selectedBlock: action.coords }

    default:
      return state
  }
}

export default reducer
