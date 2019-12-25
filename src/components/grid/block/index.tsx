import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { Container } from './styles'

interface IProps {
  colIndex: number
  rowIndex: number
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  return <Container data-cy="block-container">X</Container>
}

export default Block
