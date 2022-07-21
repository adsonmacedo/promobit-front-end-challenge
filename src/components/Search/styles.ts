import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;

  ${media.lessThan('medium')`
    justify-content: flex-start;
  `}
`

export const InputContainer = styled.div`
  width: 100%;
  max-width: 600px;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  font-size: 1.6rem;
  line-height: 24px;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 5px #5c16c5;
  }
`

export const ResultsContainer = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  max-width: 600px;
  height: auto;
  max-height: 400px;
  overflow: auto;
  margin-top: 4px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  padding: 6px 0;
  z-index: 9;
`

export const ResultsItems = styled.ul`
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: inherit;
  }
`

export const ResultsItem = styled.li`
  list-style: none;
  padding: 10px 16px;
  transition: background-color 200ms;

  &:hover {
    background-color: #eee;
  }

  a {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`

export const ResultLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`

export const ResultRight = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: #646464;
`

export const CoverContainer = styled.div`
  width: 60px;
  aspect-ratio: 2 / 3;
  display: flex;
  flex-shrink: 0;
  border-radius: 4px;
  background-color: #eee;
`

export const Cover = styled.img`
  width: 60px;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: 4px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
  }

  p {
    font-size: 1.4rem;
    color: #666;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
`

export const Title = styled.span`
  font-size: 1.8rem;
`
