import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  padding: 30px 0 0;
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.sizes.wrapper};
    margin: 0 auto;
    padding: 0 16px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 176px);
    gap: 32px;
    justify-content: space-between;

    ${media.lessThan('large')`
      justify-content: center;
    `}

    ${media.lessThan('small')`
      grid-template-columns: repeat(2, 1fr);
      gap: 32px 20px;
    `}
  `}
`
