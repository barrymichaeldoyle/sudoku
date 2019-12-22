import { createStore } from 'redux'

import reducer from 'modules'

function configureStore(initialState = {}) {
  return createStore(reducer, initialState)
}

export default configureStore
