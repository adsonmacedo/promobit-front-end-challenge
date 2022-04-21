import * as S from './styles'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function MoviesSkeleton() {
  return (
    <S.Container>
      <S.Wrapper>
        {[...Array(20)].map((_, idx) => (
          <div key={idx}>
            <Skeleton borderRadius={4} width={176} height={264} />
            <Skeleton borderRadius={4} style={{ marginTop: '15px' }} />
            <Skeleton
              borderRadius={4}
              width={80}
              style={{ marginTop: '8px' }}
            />
          </div>
        ))}
      </S.Wrapper>
    </S.Container>
  )
}
