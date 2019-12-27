import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { devToolsEnhancer } from 'redux-devtools-extension'

import reducer from 'modules'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

function configureStore(initialState = {}) {
  const store = createStore(
    persistedReducer,
    initialState,
    devToolsEnhancer({})
  )
  const persistor = persistStore(store)
  return { store, persistor }
}

export default configureStore
