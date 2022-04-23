import styled, { css } from 'styled-components'

export const Container = styled.section``

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.sizes.wrapper};
    margin: 0 auto;
    padding: 74px 16px 40px;
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
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  column-gap: 16px;
  padding: 5px 5px 26px;
  position: relative;

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ${({ theme }) => css`
    &::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.castScrollbar.scroll};
      border-radius: 20px;
    }

    &::-webkit-scrollbar-track {
      background: ${theme.colors.castScrollbar.bg};
      border-radius: 20px;
    }
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    max-width: 191px;
    border-radius: 4px;
    overflow: hidden;
    padding: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    h3 {
      margin-top: 16px;
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 1.3;
      color: ${theme.colors.text.lighterBlack};
    }

    span {
      margin-top: 4px;
      line-height: 1.3;
      color: ${theme.colors.text.lighterBlack};
    }
  `}
`

export const ProfileImage = styled.img`
  border-radius: 4px;
  width: 175px;
  height: 222px;
  object-fit: cover;
`

export const ShowMore = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  max-width: 191px;
  width: 100%;
  padding: 8px;

  ${({ theme }) => css`
    a {
      text-decoration: none;
      font-size: 1.6rem;
      font-weight: 700;
      color: ${theme.colors.text.lighterBlack};
    }
  `}
`

export const NoPicture = styled.div`
  width: 175px;
  height: 222px;
  background-color: #dbdbdb;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`
