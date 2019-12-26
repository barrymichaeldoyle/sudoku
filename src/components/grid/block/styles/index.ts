import styled, { css } from 'styled-components'

interface IProps {
  active?: boolean
  puzzle?: boolean
}

export const Container = styled.div<IProps>`
  ${({ active, puzzle, theme }) => css`
    align-items: center;
    background-color: ${active ? theme.colors.blue : theme.colors.white};
    border: solid 1px ${theme.colors.black};
    cursor: pointer;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    font-weight: ${puzzle ? 'bold' : 'normal'};
    font-size: 20px;
    height: auto;
    justify-content: center;
    transition: ${theme.transition};
    user-select: none;

    &:before {
      padding-top: 100%;
      content: '';
      float: left;
    }

    &:hover {
      background-color: ${theme.colors.lightBlue};
    }
  `}
`
