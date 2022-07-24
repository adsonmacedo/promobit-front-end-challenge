import { AxiosRequestConfig } from 'axios'
import { api } from '../services/api'

export interface FilterProps {
  poster_path: string
  genre_ids: number[]
}

interface Options {
  arrayName?: string
  enableFilter?: boolean
  customFilter?: any
  slice?: number
  axiosConfig?: AxiosRequestConfig
}

const config = {
  filter: (f: FilterProps) => f.poster_path && f.genre_ids?.length,
}

export const tmdbApi = async (url: string, options: Options = {}) => {
  try {
    const response = await api.get(url, options.axiosConfig)
    let data = response.data

    if (!!options.arrayName) {
      data = data[options.arrayName]
    }

    if (options.enableFilter) {
      data = data.filter(config.filter)
    }

    if (!!options.customFilter) {
      data = data.filter(options.customFilter)
    }

    if (!!options.slice) {
      data = data.slice(0, options.slice)
    }

    return data
  } catch (error) {
    return console.error(error)
  }
}
