import React, { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { IReducer } from 'modules'
import { fillBlock } from 'modules/grid'
import { BLOCK_COORDS, N, NUMBERS } from 'typings'

import { Container } from './styles'

interface IProps {
  value: NUMBERS
}

interface IState {
  selectedBlock?: BLOCK_COORDS
  selectedValue: N
}

const Button: FC<IProps> = ({ value }) => {
  const state = useSelector<IReducer, IState>(
    ({ grid: { selectedBlock, workingGrid } }) => ({
      selectedBlock,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
    })
  )
  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const fill = useCallback(() => {
    if (state.selectedBlock && state.selectedValue === 0)
      dispatch(fillBlock(value, state.selectedBlock))
  }, [dispatch, state.selectedBlock, state.selectedValue, value])

  return <Container onClick={fill}>{value}</Container>
}

export default Button
