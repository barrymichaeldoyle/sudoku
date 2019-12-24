import React, { FC } from 'react'

import { createFullGrid } from 'utils'

import Block from './block'
import { Container, Row } from './styles'

const Grid: FC = () => {
  const grid = createFullGrid()
  console.log({ grid })

  return (
    <Container data-cy="grid-container">
      {[...Array(9)].map((rowElement, rowIndex) => (
        <Row data-cy="grid-row-container">
          {[...Array(9)].map((colElement, colIndex) => (
            <Block />
          ))}
        </Row>
      ))}
    </Container>
  )
}

export default Grid
