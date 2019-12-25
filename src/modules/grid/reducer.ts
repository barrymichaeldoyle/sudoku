import { AnyAction } from 'redux'

import * as types from './types'

const initialState = {}

function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case types.CREATE_FULL_GRID:
      return { ...state }

    default:
      return state
  }
}

export default reducer
