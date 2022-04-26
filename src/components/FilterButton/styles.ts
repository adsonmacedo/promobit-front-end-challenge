import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Button = styled.button`
  ${({ theme }) => css`
    position: relative;
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

    &.active {
      background-color: ${theme.colors.filters.active.bg};
      color: ${theme.colors.filters.active.text};
    }
  `}
`

export const CloseBtn = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  height: 100%;
  border-radius: 0 4px 4px 0;
  padding: 10px;
  color: rgba(255, 255, 255, 0.8);
  transition: color 200ms ease-in-out;

  &:hover {
    color: white;
  }

  ${({ theme }) =>
    `background-image: linear-gradient(to right, transparent -10%, ${theme.colors.filters.active.bg} 20%)`}
`
