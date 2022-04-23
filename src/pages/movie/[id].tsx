import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useContext, useEffect } from 'react'
import CastCards from '../../components/CastCards'
import Header from '../../components/Header'
import MovieHero from '../../components/MovieHero'
import Recommendations from '../../components/Recommendations'
import Trailer from '../../components/Trailer'
import { FiltersContext } from '../../contexts/FiltersContext'
import { api } from '../../services/api'
import MovieStyles from '../../styles/movie'

export default function Movie({
  movie,
  releaseDates,
  credits,
  recommendations,
  trailer,
}) {
  const { setFilters } = useContext(FiltersContext)

  useEffect(() => {
    setFilters([])
  }, [setFilters])

  return (
    <>
      <Head>
        <title>{movie.title || movie.original_title}</title>
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
  const getMovie = await api.get(`/movie/${params.id}`)

  const getReleaseDates = await api.get(`/movie/${params.id}/release_dates`)
  const allReleaseDates = getReleaseDates.data.results
  const releaseDates =
    allReleaseDates.filter(rd => rd.iso_3166_1 === 'BR')[0] ||
    allReleaseDates.filter(rd => rd.iso_3166_1 === 'US')[0] ||
    allReleaseDates[0]

  const getCredits = await api.get(`/movie/${params.id}/credits`)

  const getRecommendations = await api.get(
    `/movie/${params.id}/recommendations`
  )
  const recommendations = getRecommendations.data.results.slice(0, 12)

  const getVideos = await api.get(`/movie/${params.id}/videos`)
  const trailer = getVideos.data.results.filter(
    video => video.type === 'Trailer'
  )

  return {
    props: {
      movie: getMovie.data,
      releaseDates,
      credits: getCredits.data,
      recommendations,
      trailer,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get(`/movie/popular?page=1`)
  const movies = response.data.results.filter(i => i.poster_path)

  const ids = movies.map(movie => movie.id)
  const paths = ids.map(id => ({
    params: { id: id.toString() },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}
