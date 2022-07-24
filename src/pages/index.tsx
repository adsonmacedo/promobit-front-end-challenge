import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import Filters from '../components/Filters'
import Header from '../components/Header'
import Movies from '../components/Movies'
import MoviesSkeleton from '../components/MoviesSkeleton'
import Pagination from '../components/Pagination'
import { FiltersContext } from '../contexts/FiltersContext'
import { PaginationContext } from '../contexts/PaginationContext'
import { tmdbApi } from '../utils/tmdbApi'

export default function Home({ popular, genres }) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const { filters } = useContext(FiltersContext)
  const { page, setTotal } = useContext(PaginationContext)

  useEffect(() => {
    setTotal(500)

    const getMoviesByFilters = async () => {
      if (filters.length) {
        setLoading(true)

        const { total_pages } = await tmdbApi(
          `/discover/movie?with_genres=${filters.join(',')}`
        )

        setTotal(total_pages >= 500 ? 500 : total_pages)

        const data = await tmdbApi(
          `/discover/movie?with_genres=${filters.join(',')}&page=${page}`,
          {
            arrayName: 'results',
            enableFilter: true,
          }
        )

        setData(data)
        setLoading(false)
      } else {
        setData(null)
      }
    }
    getMoviesByFilters()

    const paginatePopular = async () => {
      if (page > 1 && !filters.length) {
        setLoading(true)

        const data = await tmdbApi(`/movie/popular?page=${page}`, {
          arrayName: 'results',
          enableFilter: true,
        })

        setData(data)
        setLoading(false)
      } else {
        setData(null)
      }
    }
    paginatePopular()
  }, [filters, page, setTotal])

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
        {isLoading ? <MoviesSkeleton /> : <Movies popular={data || popular} />}
      </main>
      <Pagination />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const popular = await tmdbApi('/movie/popular?page=1', {
    arrayName: 'results',
    enableFilter: true,
  })

  const genres = await tmdbApi('/genre/movie/list', {
    arrayName: 'genres',
  })

  return {
    props: {
      popular,
      genres,
    },
    revalidate: 60 * 60 * 24, // 1 dia
  }
}
