import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section``

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.sizes.wrapper};
    margin: 0 auto;
    padding: 40px 16px;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 32px;
    color: ${theme.colors.text.lighterBlack};
  `}
`

export const Content = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 176px);
  gap: 32px;
  justify-content: space-between;

  ${media.lessThan('large')`
      justify-content: center;
    `}
`
