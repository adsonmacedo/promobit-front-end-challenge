import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    border: none;
    background-color: ${theme.colors.filters.inactive.bg};
    color: ${theme.colors.filters.inactive.text};
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;

    svg {
      margin-left: 10px;
    }

    &.active {
      background-color: ${theme.colors.filters.active.bg};
      color: ${theme.colors.filters.active.text};
    }
  `}
`
