import Link from 'next/link'
import styled, { css } from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  a {
    text-decoration: none;
  }
`

export const Cover = styled(Image)`
  border-radius: 4px;
  border: 1px solid #e7e7e7 !important;
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
