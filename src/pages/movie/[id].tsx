import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import CastCards from '../../components/CastCards'
import Header from '../../components/Header'
import MovieHero from '../../components/MovieHero'
import Recommendations from '../../components/Recommendations'
import Trailer from '../../components/Trailer'
import MovieStyles from '../../styles/movie'
import { tmdbApi } from '../../utils/tmdbApi'

export default function Movie({
  movie,
  releaseDates,
  credits,
  trailer,
  recommendations,
}) {
  return (
    <>
      <Head>
        <title>{movie.title}</title>
      </Head>
      <MovieStyles />
      <Header />
      <MovieHero movie={movie} releaseDates={releaseDates} credits={credits} />
      <CastCards movie={movie} credits={credits} />
      <Trailer trailer={trailer} />
      <Recommendations recommendations={recommendations} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const movie = await tmdbApi(`/movie/${params.id}`)

  const allReleaseDates = await tmdbApi(`/movie/${params.id}/release_dates`, {
    arrayName: 'results',
  })
  const releaseDates =
    allReleaseDates.filter(f => f.iso_3166_1 === 'BR')[0] ||
    allReleaseDates.filter(f => f.iso_3166_1 === 'US')[0] ||
    allReleaseDates[0] ||
    null

  const credits = await tmdbApi(`/movie/${params.id}/credits`)

  const trailer = await tmdbApi(`/movie/${params.id}/videos`, {
    arrayName: 'results',
    customFilter: f => f.type === 'Trailer',
  })

  const recommendations = await tmdbApi(`/movie/${params.id}/recommendations`, {
    arrayName: 'results',
    enableFilter: true,
    slice: 12,
  })

  return {
    props: {
      movie,
      releaseDates,
      credits,
      trailer,
      recommendations,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const movies = await tmdbApi('/movie/popular?page=1', {
    arrayName: 'results',
    enableFilter: true,
  })

  const paths = movies.map(movie => ({
    params: { id: movie.id.toString() },
  }))

  return { paths, fallback: 'blocking' }
}
