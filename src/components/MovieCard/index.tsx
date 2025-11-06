import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import Link from 'next/link'
import * as S from './styles'

type Props = {
  id: number
  image: string
  title: string
  releaseDate: string
}

export default function MovieCard({ id, image, title, releaseDate }: Props) {
  return (
    <S.Container>
      <Link href={`/movie/${id}`} prefetch={false}>
        <S.Cover src={image} alt={title} />
        <S.Title>{title}</S.Title>
        <S.ReleaseDate>
          {releaseDate
            ? format(new Date(releaseDate + 'EDT'), 'dd MMM yyyy', {
                locale: ptBR,
              })
            : '-'}
        </S.ReleaseDate>
      </Link>
    </S.Container>
  )
}
