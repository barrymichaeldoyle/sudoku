import { combineReducers } from 'redux'

import grid from './grid'

const reducer = combineReducers({ grid })

export type IReducer = ReturnType<typeof reducer>
export default reducer
