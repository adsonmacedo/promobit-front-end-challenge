import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as S from '../MovieCard/styles'

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
  grid-template-columns: repeat(auto-fit, 166px);
  gap: 32px 20px;
  justify-content: space-between;
  transition: all 200ms;

  ${S.Cover} {
    width: 166px;
    height: 249px;

    ${media.lessThan('small')`
      width: 100%;
      height: 76%;
    `}
  }

  ${media.lessThan('medium')`
    justify-content: center
  `}

  ${media.lessThan('small')`
    grid-template-columns: repeat(2, 1fr);
  `}
`
