import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgrounds.darkPurple};
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 1080px;
    margin: 0 auto;
    padding: 84px 16px;

    ${media.lessThan('medium')`
      padding: 40px 16px;
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.text.white};
    text-align: center;
    font-size: 4.8rem;
    font-weight: 700;
    max-width: 781px;
    margin: 0 auto;
    line-height: 56px;

    ${media.lessThan('medium')`
      font-size: 2.4rem;
      text-align: left;
      line-height: 28px;
    `}
  `}
`

export const FilterBy = styled.span`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.text.white};
    text-align: center;
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 20px;
    margin-top: 40px;

    ${media.lessThan('medium')`
      margin-top: 36px;
      text-align: left;
      line-height: 20px;
    `}
  `}
`

export const FilterButtons = styled.div`
  ${({ theme }) => css`
    margin-top: 16px;
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;

    ${media.lessThan('medium')`
      justify-content: flex-start;
    `}
  `}
`
