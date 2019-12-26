import styled, { css } from 'styled-components'

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 15px;
    display: flex;
    flex: 1;
    flex-direction: column;
    max-height: fit-content;
    padding: 15px;
  `}
`
