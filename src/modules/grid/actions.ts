import { Action, AnyAction } from 'redux'

import * as types from './types'
import { BLOCK_COORDS } from 'typings'

export const createFullGrid = (): Action => ({ type: types.CREATE_FULL_GRID })

export const selectBlock = (coords: BLOCK_COORDS): AnyAction => ({
  coords,
  type: types.SELECT_BLOCK,
})
