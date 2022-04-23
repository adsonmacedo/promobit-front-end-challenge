import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  a {
    text-decoration: none;
  }
`

export const Cover = styled.img`
  border-radius: 4px;
  border: 1px solid #e7e7e7 !important;
  width: 176px;
  height: 264px;
  object-fit: cover;
  transition: all 200ms;

  ${media.lessThan('small')`
    width: 100%;
    height: 76%;
  `}
`

export const Title = styled.h4`
  ${({ theme }) => css`
    line-height: 24px;
    font-size: 1.6rem;
    font-weight: 700;
    margin-top: 8px;
    color: ${theme.colors.text.black};
  `}
`

export const ReleaseDate = styled.span`
  ${({ theme }) => css`
    line-height: 24px;
    font-size: 1.4rem;
    font-weight: 700;
    color: ${theme.colors.text.gray};
    text-transform: uppercase;
  `}
`
