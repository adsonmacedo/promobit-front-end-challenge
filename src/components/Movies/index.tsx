import { tmdbImage } from '../../utils/tmdbImage'
import MovieCard from '../MovieCard'
import * as S from './styles'

export default function Movies({ popular }) {
  return (
    <S.Container>
      <S.Wrapper>
        {popular.map(item => (
          <MovieCard
            key={item.id}
            id={item.id}
            image={tmdbImage(item.poster_path)}
            title={item.title || item.original_title}
            releaseDate={item.release_date}
          />
        ))}
      </S.Wrapper>
    </S.Container>
  )
}
