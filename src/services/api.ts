import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    language: 'pt-BR',
  },
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
  },
})
