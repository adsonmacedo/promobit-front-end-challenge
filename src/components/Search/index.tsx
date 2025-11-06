import { format } from 'date-fns'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import { HiX } from 'react-icons/hi'
import 'react-loading-skeleton/dist/skeleton.css'
import { tmdbApi } from '../../utils/tmdbApi'
import { tmdbImage } from '../../utils/tmdbImage'
import * as S from './styles'

export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    setQuery(e.target.value)

    if (e.target.value) {
      const data = await tmdbApi(
        `https://api.themoviedb.org/3/search/movie?query=${e.target.value}&page=1&include_adult=false`,
        {
          arrayName: 'results',
          enableFilter: true,
        }
      )

      if (data) {
        setShowResults(true)
        setResults(data)
      } else {
        setShowResults(false)
        setResults([])
      }
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

  const clearInput = () => {
    setQuery('')
    setResults([])
    setShowResults(false)
  }

  return (
    <S.Container onBlur={handleBlur} onFocus={handleFocus}>
      <S.InputContainer>
        <S.Input
          placeholder="Pesquise por um título"
          value={query}
          onChange={handleChange}
        />
        {query && (
          <button type="button" onClick={clearInput}>
            <HiX size={20} />
          </button>
        )}
      </S.InputContainer>

      {showResults && (
        <S.ResultsContainer>
          <S.ResultsItems>
            {results.map(result => (
              <S.ResultsItem key={result.id}>
                <Link href={`/movie/${result.id}`} prefetch={false}>
                  <S.ResultLeft>
                    <S.CoverContainer>
                      <S.Cover
                        src={tmdbImage(result.poster_path, 92)}
                        alt={result.title}
                      />
                    </S.CoverContainer>
                    <S.TextContainer>
                      <S.Title>{result.title}</S.Title>
                      <p>{result.overview || 'Sinopse não disponível'}</p>
                    </S.TextContainer>
                  </S.ResultLeft>
                  <S.ResultRight>
                    {result.release_date
                      ? format(new Date(result.release_date), 'yyyy')
                      : '-'}
                  </S.ResultRight>
                </Link>
              </S.ResultsItem>
            ))}
          </S.ResultsItems>
        </S.ResultsContainer>
      )}
    </S.Container>
  )
}
