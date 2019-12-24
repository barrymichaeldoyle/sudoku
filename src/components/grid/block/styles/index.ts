import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    align-items: center;
    border: solid 1px ${theme.colors.grid};
    cursor: pointer;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    font-weight: bold;
    font-size: 20px;
    height: auto;
    justify-content: center;
    transition: ${theme.transition};

    &:before {
      padding-top: 100%;
      content: '';
      float: left;
    }

    &:hover {
      background-color: ${theme.colors.gridBlockHover};
    }
  `}
`
