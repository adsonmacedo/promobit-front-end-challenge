import Link from 'next/link'
import * as S from './styles'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

type Props = {
  id: number
  image: string
  title: string
  releaseDate: string
}

export default function MovieCard({ id, image, title, releaseDate }: Props) {
  return (
    <S.Container>
      <Link href={`/movie/${id}`}>
        <a>
          <S.Cover src={image} alt={title} />
          <S.Title>{title}</S.Title>
          <S.ReleaseDate>
            {releaseDate
              ? format(new Date(releaseDate), 'dd MMM yyyy', {
                  locale: ptBR,
                })
              : '-'}
          </S.ReleaseDate>
        </a>
      </Link>
    </S.Container>
  )
}
