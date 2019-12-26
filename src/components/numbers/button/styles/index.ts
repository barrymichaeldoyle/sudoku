import styled, { css } from 'styled-components'

interface IProps {
  disabled?: boolean
}

export const Container = styled.button<IProps>`
  ${({ disabled, theme }) => css`
    align-items: center;
    background-color: ${theme.colors.black};
    border: 2px solid ${theme.colors.black};
    border-radius: 4px;
    box-shadow: ;
    color: ${theme.colors.white};
    cursor: pointer;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    font-size: 16px;
    font-weight: bold;
    height: auto;
    justify-content: center;
    margin: 4px 2px;
    opacity: 0.9;
    padding: 0;
    transition: ${theme.transition};

    &:before {
      padding-top: 100%;
      content: '';
      float: left;
    }

    &:focus {
      border-color: ${theme.colors.blue};
      outline: none;
    }

    &:hover {
      opacity: 0.6;
    }

    ${disabled &&
      css`
        opacity: 0.4;
        pointer-events: none;
      `}
  `}
`
