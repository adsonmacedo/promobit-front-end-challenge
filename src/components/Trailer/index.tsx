import * as S from './styles'

export default function Trailer({ trailer }) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>Trailer</S.Title>
        <S.Content>
          {trailer.length ? (
            <S.Video>
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${trailer[0].key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </S.Video>
          ) : (
            <span>Trailer não disponível</span>
          )}
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}
