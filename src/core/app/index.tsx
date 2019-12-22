import React from 'react'
import { Provider } from 'react-redux'

import { createStore } from 'core'
import { createFullGrid } from 'utils'

const store = createStore()

const App: React.FC = () => {
  const grid = createFullGrid()
  console.log({ grid })

  return (
    <Provider store={store}>
      <div>See console for generated sudoku grid</div>
    </Provider>
  )
}

export default App
