import { createStore } from 'redux'

import rootReducer from 'modules'

function createReduxStore() {
  return createStore(rootReducer)
}

export default createReduxStore
