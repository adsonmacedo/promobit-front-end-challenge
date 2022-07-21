import { useContext } from 'react'
import { FiltersContext } from '../../contexts/FiltersContext'
import FilterButton from '../FilterButton'
import Search from '../Search'
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
        <S.FilterButtons>
          {genres.map(genre => (
            <FilterButton
              key={genre.id}
              id={genre.id}
              handleFilters={handleFilters}
            >
              {genre.name}
            </FilterButton>
          ))}
        </S.FilterButtons>
        <S.FilterBy>Pesquisar:</S.FilterBy>
        <Search />
      </S.Wrapper>
    </S.Container>
  )
}
