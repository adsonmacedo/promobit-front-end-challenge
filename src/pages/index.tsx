import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import Filters from '../components/Filters'
import Header from '../components/Header'
import Movies from '../components/Movies'
import MoviesSkeleton from '../components/MoviesSkeleton'
import { FilteredDataProps } from '../components/Search'
import { FiltersContext } from '../contexts/FiltersContext'
import { api } from '../services/api'

export default function Home({ genres, popular }) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const { filters } = useContext(FiltersContext)

  useEffect(() => {
    if (filters.length) {
      setLoading(true)
      api
        .get(
          `https://api.themoviedb.org/3/discover/movie?with_genres=${filters.join(
            ','
          )}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        )
        .then(response => {
          setData(response.data.results.filter(i => i.poster_path))
          setLoading(false)
        })
    } else {
      setData(null)
    }
  }, [filters])

  return (
    <>
      <Head>
        <title>
          Home Page | Milhões de filmes, séries e pessoas para descobrir.
          Explore já
        </title>
      </Head>
      <Header />
      <Filters genres={genres} />
      <main>
        {isLoading ? (
          <MoviesSkeleton />
        ) : (
          <Movies popular={data ? data : popular} />
        )}
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const getPopular = await api.get('/movie/popular?page=1')
  const popularWithImage = getPopular.data.results.filter(
    (f: FilteredDataProps) => f.poster_path && f.genre_ids.length
  )

  const getGenres = await api.get('/genre/movie/list')

  return {
    props: {
      popular: popularWithImage,
      genres: getGenres.data.genres,
    },
    revalidate: 60 * 60 * 24, // 1 dia
  }
}
