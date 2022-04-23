import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgrounds.darkPurple};
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.sizes.wrapper};
    margin: 0 auto;
    padding: 72px 16px 0;

    ${media.lessThan('medium')`
    padding: 34px 16px 70px;
    `}
  `}
`

export const Content = styled.div`
  display: flex;
  gap: 33px;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const CoverContainer = styled.div`
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
  margin-bottom: -46px;
  flex-shrink: 0;

  ${media.lessThan('medium')`
    margin: 0 auto;
    width: 186px;
    height: 279px;
  `}
`

export const Cover = styled.img`
  border-radius: 8px;
  width: 383px;
  height: 574px;
  object-fit: cover;
`

export const MovieDetails = styled.div``

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 38px;
    color: ${theme.colors.text.white};
  `}
`

export const QuickInfo = styled.h4`
  ${({ theme }) => css`
    margin-top: 8px;
    line-height: 24px;
    font-size: 1.8rem;
    font-weight: 400;
    color: ${theme.colors.text.white};

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
    `}

    > span {
      margin: 0 5px;

      ${media.lessThan('medium')`
        margin: 0;
      `}
    }

    .bullet {
      ${media.lessThan('medium')`
        display: none;
      `}
    }
  `}
`

export const Rating = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: 16px;
    align-items: center;

    ${media.lessThan('medium')`
      margin-top: 30px;
    `}

    > span {
      margin-left: 12px;
      color: ${theme.colors.text.white};
      line-height: 20px;
      max-width: 100px;
    }
  `}
`

export const Progress = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
`

export const Percentage = styled.span`
  ${({ color }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    color: ${color};
  `}
`

export const Synopsis = styled.div`
  ${({ theme }) => css`
    margin-top: 32px;

    h3 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 24px;
      color: ${theme.colors.text.white};
    }

    p {
      margin-top: 8px;
      color: #dddddd;
      max-width: 700px;
      line-height: 24px;
    }
  `}
`

export const Credits = styled.div`
  ${({ theme }) => css`
    margin-top: 24px;
    padding-bottom: 24px;
    color: ${theme.colors.text.white};
    max-width: 590px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 23px 33px;

    ${media.lessThan('large')`
      grid-template-columns: repeat(2, minmax(130px, 1fr));
    `}

    span {
      display: block;
      font-weight: 700;
      line-height: 24px;
    }

    small {
      display: block;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 20px;
    }
  `}
`
