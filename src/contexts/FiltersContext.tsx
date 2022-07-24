import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'
import { useLocalStorage } from 'usehooks-ts'

interface Props {
  children: ReactNode
}

interface ContextType {
  filters: number[] | undefined
  setFilters: Dispatch<SetStateAction<number[]>>
}

const defaultValue: ContextType = {
  filters: [],
  setFilters: () => {},
}

export const FiltersContext = createContext<ContextType>(defaultValue)

export const FiltersProvider = ({ children }: Props) => {
  const [filters, setFilters] = useLocalStorage('filters', [])

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}
