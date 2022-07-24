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
