import { tmdbImage } from '../../utils/tmdbImage'
import * as S from './styles'
import { HiArrowSmRight } from 'react-icons/hi'
import { AvatarMan, AvatarUnknown, AvatarWoman } from '../GenderAvatars'

export default function CastCards({ credits, movie }) {
  const cast: any[] = credits.cast.slice(0, 10)

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>Elenco original</S.Title>
        <S.Content>
          {cast.map(person => (
            <S.Card key={person.id}>
              {person.profile_path ? (
                <S.ProfileImage
                  src={tmdbImage(person.profile_path, 185)}
                  alt={person.name}
                />
              ) : (
                <S.NoPicture>
                  {person.gender === 1 && (
                    <AvatarWoman color="#c9c9c9" size={80} />
                  )}
                  {person.gender === 2 && (
                    <AvatarMan color="#c9c9c9" size={80} />
                  )}
                  {(person.gender === 0 || person.gender >= 3) && (
                    <AvatarUnknown color="#c9c9c9" size={80} />
                  )}
                </S.NoPicture>
              )}
              <h3>{person.name}</h3>
              <span>{person.character}</span>
            </S.Card>
          ))}
          {cast.length > 0 ? (
            <S.ShowMore>
              <a
                href={`https://www.themoviedb.org/movie/${movie.id}/cast`}
                target="_blank"
                rel="noreferrer"
              >
                Mostrar mais
              </a>
              <HiArrowSmRight size={24} />
            </S.ShowMore>
          ) : (
            <span>Elenco não disponível</span>
          )}
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}
