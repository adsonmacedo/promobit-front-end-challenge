import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Header from '../../components/Header'
import PersonHero from '../../components/PersonHero'
import Recommendations from '../../components/Recommendations'
import { tmdbApi } from '../../utils/tmdbApi'

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
  const person = await tmdbApi(`/person/${params.id}`, {
    axiosConfig: {
      params: { language: 'pt-BR' },
    },
  })

  const moviesByPerson = await tmdbApi(`/person/${params.id}/movie_credits`, {
    arrayName: 'cast',
    enableFilter: true,
    slice: 12,
  })

  return {
    props: {
      person,
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
