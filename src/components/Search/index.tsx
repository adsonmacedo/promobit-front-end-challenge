import { format } from 'date-fns'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import { api } from '../../services/api'
import { tmdbImage } from '../../utils/tmdbImage'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './styles'

export interface FilteredDataProps {
  poster_path: string
  genre_ids: number[]
}

export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    setQuery(e.target.value)

    if (e.target.value) {
      api
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${e.target.value}&page=1&include_adult=false&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        )
        .then(({ data }) => {
          const filteredData = data.results.filter(
            (f: FilteredDataProps) => f.poster_path && f.genre_ids.length
          )

          if (filteredData.length) {
            setShowResults(true)
            setResults(filteredData)
          } else {
            setShowResults(false)
            setResults([])
          }
        })
    } else {
      setShowResults(false)
      setResults([])
    }
  }

  const handleBlur = e => {
    if (!e.currentTarget.contains(e.relatedTarget)) setShowResults(false)
  }

  const handleFocus = () => {
    if (results.length > 0) setShowResults(true)
  }

  return (
    <S.Container onBlur={handleBlur} onFocus={handleFocus}>
      <S.InputContainer>
        <S.Input
          placeholder="Pesquise por um título"
          value={query}
          onChange={handleChange}
        />
      </S.InputContainer>

      {showResults && (
        <S.ResultsContainer>
          <S.ResultsItems>
            {results.map(result => (
              <S.ResultsItem key={result.id}>
                <Link href={`/movie/${result.id}`}>
                  <a>
                    <S.ResultLeft>
                      <S.CoverContainer>
                        <S.Cover
                          src={tmdbImage(result.poster_path, 92)}
                          alt={result.title || result.original_title}
                        />
                      </S.CoverContainer>
                      <S.TextContainer>
                        <S.Title>
                          {result.title || result.original_title}
                        </S.Title>
                        <p>{result.overview || 'Sinopse não disponível'}</p>
                      </S.TextContainer>
                    </S.ResultLeft>
                    <S.ResultRight>
                      {result.release_date
                        ? format(new Date(result.release_date), 'yyyy')
                        : '-'}
                    </S.ResultRight>
                  </a>
                </Link>
              </S.ResultsItem>
            ))}
          </S.ResultsItems>
        </S.ResultsContainer>
      )}
    </S.Container>
  )
}
