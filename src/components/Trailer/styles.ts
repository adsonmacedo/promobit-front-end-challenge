import styled, { css } from 'styled-components'

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
`

export const Video = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`
