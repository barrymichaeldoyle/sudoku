import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import reducer from 'modules'

function configureStore(initialState = {}) {
  return createStore(reducer, initialState, devToolsEnhancer({}))
}

export default configureStore
