import React, { FC } from 'react'

import { createFullGrid } from 'utils'

const Grid: FC = () => {
  const grid = createFullGrid()
  console.log({ grid })

  return <div>Grid (WIP)</div>
}

export default Grid
