import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { Grid } from 'components'
import { configureStore, unregister } from 'core'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Grid />
  </Provider>,
  document.getElementById('root')
)

unregister()
