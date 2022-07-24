import { useContext } from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'
import { FiltersContext } from '../../contexts/FiltersContext'
import Search from '../Search'
import cx from 'classnames'
import { useIsClient } from 'usehooks-ts'
import * as S from './styles'

type GenresType = {
  id: number
  name: string
}

type Props = {
  genres: GenresType[]
}

export default function Filters({ genres }: Props) {
  const { filters, setFilters } = useContext(FiltersContext)
  const isClient = useIsClient()

  const handleFilters = (id: number) => {
    if (filters.includes(id)) {
      const newArr = filters.filter(filter => filter !== id)
      setFilters(newArr)
    } else {
      setFilters([...filters, id])
    }
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </S.Title>
        <S.FilterBy>Filtre por:</S.FilterBy>
        {isClient && (
          <S.FilterButtons>
            {genres.map(genre => (
              <S.Button
                key={genre.id}
                type="button"
                className={cx({
                  active: filters.includes(genre.id),
                })}
                onClick={() => handleFilters(genre.id)}
              >
                {genre.name}
                {filters.includes(genre.id) && (
                  <S.CloseBtn>
                    <RiCloseCircleFill size={20} />
                  </S.CloseBtn>
                )}
              </S.Button>
            ))}
          </S.FilterButtons>
        )}
        <S.FilterBy>Pesquisar:</S.FilterBy>
        <Search />
      </S.Wrapper>
    </S.Container>
  )
}
