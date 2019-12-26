import React, { FC } from 'react'

import { NUMBERS } from 'typings'

import { Container } from './styles'

interface IProps {
  value: NUMBERS
}

const Button: FC<IProps> = ({ value }) => {
  return <Container>{value}</Container>
}

export default Button
