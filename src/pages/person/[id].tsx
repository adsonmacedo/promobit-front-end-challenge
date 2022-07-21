import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Header from '../../components/Header'
import PersonHero from '../../components/PersonHero'
import Recommendations from '../../components/Recommendations'
import { FilteredDataProps } from '../../components/Search'
import { api } from '../../services/api'

export default function Person({ person, moviesByPerson }) {
  return (
    <>
      <Head>
        <title>{person.name}</title>
      </Head>
      <Header />
      <PersonHero person={person} />
      <Recommendations
        recommendations={moviesByPerson}
        title={`Trabalhos de ${person.name}`}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const person = await api.get(`/person/${params.id}`)
  const getMoviesByPerson = await api.get(`/person/${params.id}/movie_credits`)

  const moviesByPerson = getMoviesByPerson.data.cast
    .filter((f: FilteredDataProps) => f.poster_path && f.genre_ids.length)
    .slice(0, 12)

  return {
    props: {
      person: person.data,
      moviesByPerson,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
