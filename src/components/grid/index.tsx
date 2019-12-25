import React, { Children, FC, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Action, Dispatch } from 'redux'

import { createFullGrid } from 'modules/grid'

import Block from './block'
import { Container, Row } from './styles'
import { INDEX } from 'typings'

const Grid: FC = () => {
  const dispatch = useDispatch<Dispatch<Action>>()

  const create = useCallback(() => dispatch(createFullGrid()), [dispatch])

  useEffect(() => {
    create()
  }, [create])

  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block
                  colIndex={colIndex as INDEX}
                  rowIndex={rowIndex as INDEX}
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
