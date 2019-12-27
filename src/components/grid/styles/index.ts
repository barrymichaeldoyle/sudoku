import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`

export const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row;

    &:nth-child(1) {
      div {
        border-top: solid 4px ${theme.colors.black};
      }
    }
    &:nth-child(3),
    &:nth-child(6) {
      div {
        border-bottom: solid 3px ${theme.colors.black};
      }
    }
    &:nth-child(9) {
      border-bottom: solid 4px ${theme.colors.black};
    }

    div {
      &:nth-child(1) {
        border-left: solid 4px ${theme.colors.black};
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        border-right: solid 4px ${theme.colors.black};
      }
      &:nth-child(4),
      &:nth-child(7) {
        border-left: none;
      }
    }
  `}
`
