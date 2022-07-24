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
            image={tmdbImage(item.poster_path, 185)}
            title={item.title}
            releaseDate={item.release_date}
          />
        ))}
      </S.Wrapper>
    </S.Container>
  )
}
