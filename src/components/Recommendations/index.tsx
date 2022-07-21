import { tmdbImage } from '../../utils/tmdbImage'
import MovieCard from '../MovieCard'
import * as S from './styles'

export default function Recommendations({
  recommendations,
  title = 'Recomendações',
}) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Content>
          {recommendations.length ? (
            recommendations.map(rec => (
              <MovieCard
                key={rec.id}
                id={rec.id}
                image={tmdbImage(rec.poster_path, 185)}
                title={rec.title || rec.original_title}
                releaseDate={rec.release_date}
              />
            ))
          ) : (
            <span>Sem recomendações no momento.</span>
          )}
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}
