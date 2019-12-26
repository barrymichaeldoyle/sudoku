import React, { FC } from 'react'

import { NUMBERS } from 'typings'

import Button from './button'
import { Container } from './styles'

const Numbers: FC = () => (
  <Container>
    {([1, 2, 3, 4, 5, 6, 7, 8, 9] as NUMBERS[]).map(value => (
      <Button key={value} value={value} />
    ))}
  </Container>
)

export default Numbers
