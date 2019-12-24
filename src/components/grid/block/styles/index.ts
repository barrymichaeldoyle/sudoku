import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    align-items: center;
    border: solid 1px ${theme.colors.grid};
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    height: auto;
    justify-content: center;

    &:before {
      padding-top: 100%;
      content: '';
      float: left;
    }
  `}
`
