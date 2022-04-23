import styled, { css } from 'styled-components'
import media from 'styled-media-query'

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

    ${media.lessThan('medium')`
      font-size: 1.4rem;
      padding: 6px 14px;
    `}

    ${media.lessThan('small')`
      font-size: 1.2rem;
      padding: 4px 10px;
    `}

    svg {
      margin-left: 10px;
    }

    &.active {
      background-color: ${theme.colors.filters.active.bg};
      color: ${theme.colors.filters.active.text};
    }
  `}
`
