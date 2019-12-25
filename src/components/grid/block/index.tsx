import React, { FC } from 'react'

import { Container } from './styles'

interface IProps {
  colIndex: number
  rowIndex: number
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => (
  <Container data-cy="block-container">X</Container>
)

export default Block
