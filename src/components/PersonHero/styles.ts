import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { NoPicture as NoPicureOriginal } from '../CastCards/styles'

export const Container = styled.div``

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.sizes.wrapper};
    margin: 0 auto;
    padding: 72px 16px 32px;

    ${media.lessThan('medium')`
      padding: 32px 16px;
    `}
  `}
`

export const Content = styled.div`
  display: flex;
  gap: 30px;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const CoverContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 300px;
  height: 450px;
  object-fit: cover;
  border-radius: 8px;
  overflow: hidden;

  ${media.lessThan('medium')`
    margin: 0 auto;
    width: 186px;
    height: 279px;
  `}
`

export const NoPicture = styled(NoPicureOriginal)`
  width: 300px;
  height: 450px;
`

export const Cover = styled.img``

export const DetailsContainer = styled.div``

export const Name = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.text.lighterBlack};
    font-size: 3.2rem;
    font-weight: 700;
  `}
`

export const Biography = styled.div`
  margin-top: 3.2rem;

  p {
    ${({ theme }) => css`
      margin-top: 1.2rem;
      color: ${theme.colors.text.lighterBlack};
      line-height: 1.5;
    `}
  }
`

export const NoBiography = styled.button`
  display: block;
  margin-top: 8px;
  border: none;
  background: none;
  color: #5c16c5;
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
`

export const DetailsContent = styled.div`
  margin-top: 3.2rem;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 3.2rem;

  ${media.lessThan('large')`
    grid-template-columns: repeat(2, auto);
  `}
`

export const Details = styled.div``

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.text.lighterBlack};
    font-size: 2rem;
    font-weight: 500;
    line-height: 1;
  `}
`

export const Detail = styled.span`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.text.gray};
    font-size: 1.8rem;
    line-height: 1;
    font-weight: 400;
    margin-top: 6px;
  `}
`
