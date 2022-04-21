import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Header = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgrounds.lightPurple};
    display: flex;
    height: 56px;
    align-items: center;
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.sizes.wrapper};
    margin: 0 auto;
    padding: 0 16px;
    width: 100%;

    ${media.lessThan('medium')`
      text-align: center;
    `}
  `}
`
