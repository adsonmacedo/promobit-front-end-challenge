import { format, parse, differenceInYears } from 'date-fns'
import { useEffect, useState } from 'react'
import { tmdbImage } from '../../utils/tmdbImage'
import * as S from './styles'
import { AvatarMan, AvatarUnknown, AvatarWoman } from '../GenderAvatars'
import { api } from '../../services/api'
import { useRouter } from 'next/router'

export default function PersonHero({ person }) {
  const [gender, setGender] = useState('')
  const [birthDay, setBirthDay] = useState('')
  const [deathDay, setDeathDay] = useState('')
  const [englishBio, setEnglishBio] = useState('')
  const [age, setAge] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const getGender = () => {
      switch (person.gender) {
        case 1:
          setGender('Feminino')
          break
        case 2:
          setGender('Masculino')
          break

        default:
          setGender('-')
          break
      }
    }
    getGender()

    const getBirthday = () => {
      if (person.birthday) {
        const date = format(new Date(person.birthday + 'EDT'), 'dd/MM/yyyy')
        setBirthDay(date)
      }
    }
    getBirthday()

    const getAge = () => {
      if (birthDay) {
        const date = parse(birthDay, 'dd/MM/yyyy', new Date())
        const age = differenceInYears(date, new Date())
        setAge(age)
      }
    }
    getAge()

    const getDeathDay = () => {
      if (person.deathday) {
        const date = format(new Date(person.deathday + 'EDT'), 'dd/MM/yyyy')
        setDeathDay(date)
      }
    }
    getDeathDay()
  }, [birthDay, person.birthday, person.deathday, person.gender])

  const loadEnglishBio = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${router.query.id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
      )
      const data = await response.json()

      if (data.biography) {
        setEnglishBio(data.biography)
      } else {
        setEnglishBio(`Biografia não disponível em inglês para ${person.name}`)
      }
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <S.CoverContainer>
            {person.profile_path ? (
              <S.Cover
                src={tmdbImage(person.profile_path, 300)}
                alt={person.name}
              />
            ) : (
              <S.NoPicture>
                {person.gender === 1 && <AvatarWoman color="#c9c9c9" />}
                {person.gender === 2 && <AvatarMan color="#c9c9c9" />}
                {(person.gender === 0 || person.gender >= 3) && (
                  <AvatarUnknown color="#c9c9c9" />
                )}
              </S.NoPicture>
            )}
          </S.CoverContainer>
          <S.DetailsContainer>
            <S.Name>{person.name}</S.Name>

            <S.Biography>
              <S.Title>Biografia</S.Title>
              <p>
                {person.biography || englishBio || (
                  <>
                    <span>Não temos uma biografia para {person.name}.</span>
                    <S.NoBiography type="button" onClick={loadEnglishBio}>
                      Tentar carregar em inglês
                    </S.NoBiography>
                  </>
                )}
              </p>
            </S.Biography>

            <S.DetailsContent>
              <S.Details>
                <S.Title>Gênero</S.Title>
                <S.Detail>{gender}</S.Detail>
              </S.Details>

              <S.Details>
                <S.Title>Nascimento</S.Title>
                <S.Detail>
                  {birthDay ? (
                    <>
                      {birthDay} {!deathDay && `(${Math.abs(age)} anos)`}
                    </>
                  ) : (
                    '-'
                  )}
                </S.Detail>
              </S.Details>

              {deathDay && (
                <S.Details>
                  <S.Title>Falecimento</S.Title>
                  <S.Detail>
                    {deathDay ? (
                      <>
                        {deathDay} ({Math.abs(age)} anos)
                      </>
                    ) : (
                      '-'
                    )}
                  </S.Detail>
                </S.Details>
              )}

              <S.Details>
                <S.Title>Local de nascimento</S.Title>
                <S.Detail>{person.place_of_birth || '-'}</S.Detail>
              </S.Details>
            </S.DetailsContent>
          </S.DetailsContainer>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}
