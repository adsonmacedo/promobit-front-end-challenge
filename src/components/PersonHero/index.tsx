import { format, parse, differenceInYears } from 'date-fns'
import { useEffect, useState } from 'react'
import { tmdbImage } from '../../utils/tmdbImage'
import * as S from './styles'
import { AvatarMan, AvatarUnknown, AvatarWoman } from '../GenderAvatars'
import { useRouter } from 'next/router'
import { tmdbApi } from '../../utils/tmdbApi'
import { HiInformationCircle } from 'react-icons/hi'

export default function PersonHero({ person }) {
  const [gender, setGender] = useState('')
  const [birthDay, setBirthDay] = useState('')
  const [deathDay, setDeathDay] = useState('')
  const [englishBio, setEnglishBio] = useState('')
  const [age, setAge] = useState(0)
  const [deathAge, setDeathAge] = useState(0)
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

    const getDeathAge = () => {
      if (deathDay) {
        const age = differenceInYears(
          new Date(person.birthday),
          new Date(person.deathday)
        )
        setDeathAge(age)
      }
    }
    getDeathAge()

    const getDeathDay = () => {
      if (person.deathday) {
        const date = format(new Date(person.deathday + 'EDT'), 'dd/MM/yyyy')
        setDeathDay(date)
      }
    }
    getDeathDay()

    if (!person.biography) {
      const loadEnglishBio = async () => {
        const { biography } = await tmdbApi(`/person/${router.query.id}`, {
          axiosConfig: {
            params: { language: 'en-US' },
          },
        })

        if (!!biography) {
          setEnglishBio(biography)
        }
      }

      loadEnglishBio()
    }
  }, [
    birthDay,
    deathDay,
    person.biography,
    person.birthday,
    person.deathday,
    person.gender,
    router.query.id,
  ])

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
              {!!englishBio && (
                <S.EnglishBio>
                  <HiInformationCircle size={20} />
                  <span>Disponível apenas em inglês para {person.name}!</span>
                </S.EnglishBio>
              )}
              <p>
                {person.biography || englishBio || (
                  <span>Não temos uma biografia para {person.name}.</span>
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
                        {deathDay} ({Math.abs(deathAge)} anos)
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
