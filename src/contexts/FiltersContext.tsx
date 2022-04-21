import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

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
  const [filters, setFilters] = useState(defaultValue.filters)

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}
