import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  margin: 70px 0;
`

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.sizes.wrapper};
    margin: 0 auto;
    padding: 0 16px;
    display: flex;
    justify-content: center;
  `}
`

export const Pagination = styled.div`
  padding: 8px 16px;
  display: flex;
  align-items: center;

  ${media.lessThan('small')`
    padding: 8px;
    display: grid;
    grid-template-columns: repeat(4, auto);
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 700;
    min-width: 40px;
    padding: 10px;
    transition: color 200ms;
    color: ${theme.colors.pagination.active};

    &:disabled,
    &:disabled:hover {
      cursor: not-allowed;
      color: ${theme.colors.pagination.default};
    }

    &.disabled,
    &.disabled:hover {
      cursor: not-allowed;
      color: ${theme.colors.pagination.default};
    }

    &.active {
      color: ${theme.colors.pagination.active};
    }
  `}
`

export const ButtonNumeric = styled.div`
  ${({ theme }) => css`
    display: flex;

    button {
      color: ${theme.colors.pagination.default};

      &:hover {
        color: ${theme.colors.pagination.active};
      }
    }

    ${media.lessThan('small')`
      grid-column: 1 / -1;
      grid-row: 1 / -1;
      padding: 0 5px;
    `}
  `}
`
