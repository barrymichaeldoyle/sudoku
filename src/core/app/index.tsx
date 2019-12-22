import React, { FC } from 'react'
import { Provider } from 'react-redux'

import { Grid } from 'components'
import { createStore } from 'core'

const store = createStore()

const App: FC = () => (
  <Provider store={store}>
    <Grid />
  </Provider>
)

export default App
