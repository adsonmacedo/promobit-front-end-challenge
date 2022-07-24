import * as S from './styles'
import { format } from 'date-fns'
import { Circle } from 'rc-progress'
import { theme } from '../../styles/theme'
import { useEffect, useState } from 'react'
import { tmdbImage } from '../../utils/tmdbImage'

export default function MovieHero({ movie, releaseDates, credits }) {
  const [percent, setPercent] = useState(0)
  const [color, setColor] = useState(null)

  const data = {
    country: releaseDates.iso_3166_1,
    certification: releaseDates.release_dates[0]?.certification,
    releaseDate: releaseDates.release_dates[0]?.release_date,

    crew: {
      director: credits.crew.filter(f => f.job === 'Director')[0],
      screenplay: credits.crew
        .filter(f => f.department === 'Writing')
        .slice(0, 2),
    },
    cast: {
      characters: credits.cast
        .filter(f => f.known_for_department === 'Acting')
        .slice(0, 2),
    },
  }

  useEffect(() => {
    setPercent(movie.vote_average * 10)

    if (percent < 30) {
      setColor(theme.colors.rating.poor)
    } else if (percent < 70) {
      setColor(theme.colors.rating.average)
    } else {
      setColor(theme.colors.rating.good)
    }
  }, [movie.vote_average, percent])

  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <S.CoverContainer>
            <S.Cover
              src={tmdbImage(movie.poster_path, 400)}
              alt={movie.title}
            />
          </S.CoverContainer>
          <S.MovieDetails>
            <S.Title>
              {movie.title} (
              {movie.release_date
                ? format(new Date(movie.release_date + 'EDT'), 'yyyy')
                : '-'}
              )
            </S.Title>
            <S.QuickInfo>
              {data.certification && (
                <>
                  <span>
                    {data.certification}{' '}
                    {Number(releaseDates.release_dates[0].certification)
                      ? 'anos'
                      : null}
                  </span>
                  <span className="bullet">&bull;</span>
                </>
              )}
              <span>
                {data.releaseDate
                  ? format(
                      new Date(data.releaseDate.slice(0, 10) + 'EDT'),
                      'dd/MM/yyyy'
                    )
                  : '-'}{' '}
                ({data.country})
              </span>
              <span className="bullet">&bull;</span>
              <span>
                {movie.genres
                  .map(genre => <span key={genre.id}>{genre.name}</span>)
                  .reduce((prev, curr) => [prev, ', ', curr])}
              </span>
              <span className="bullet">&bull;</span>
              <span>
                {movie.runtime
                  ? movie.runtime < 60
                    ? format(movie.runtime * 1000, "ss'm'")
                    : format(movie.runtime * 1000, "m'h' ss'm'")
                  : '-'}
              </span>
            </S.QuickInfo>
            {!!percent && (
              <S.Rating>
                <S.Progress>
                  <Circle
                    percent={percent}
                    strokeWidth={10}
                    strokeColor={color}
                    trailColor="transparent"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      borderRadius: '50%',
                      height: 'inherit',
                    }}
                  />
                  <S.Percentage color={color}>{`${Math.floor(
                    percent
                  )}%`}</S.Percentage>
                </S.Progress>
                <span>Avaliação dos usuários</span>
              </S.Rating>
            )}
            <S.Synopsis>
              <h3>Sinopse</h3>
              <p>
                {movie.overview ? movie.overview : 'Sinopse não disponível'}
              </p>
            </S.Synopsis>
            <S.Credits>
              {data.cast.characters.map((character, idx) => (
                <div key={character.id + idx}>
                  <span>{character.name}</span>
                  <small>{character.known_for_department}</small>
                </div>
              ))}
              <div>
                <span>{data.crew.director?.name}</span>
                <small>{data.crew.director?.job}</small>
              </div>
              {data.crew.screenplay.map((s, i) => (
                <div key={s.id + i}>
                  <span>{s.name}</span>
                  <small>{s.department}</small>
                </div>
              ))}
            </S.Credits>
          </S.MovieDetails>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}
