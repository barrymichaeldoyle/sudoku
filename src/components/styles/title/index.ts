import styled, { css } from 'styled-components'

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.card};
    text-align: center;
    margin-top: 0;
  `}
`
