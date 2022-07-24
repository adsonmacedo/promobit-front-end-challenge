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
  page: number
  setPage: Dispatch<SetStateAction<number>>
  total: number
  setTotal: Dispatch<SetStateAction<number>>
}

const defaultValue: ContextType = {
  page: 1,
  setPage: () => {},
  total: 1,
  setTotal: () => {},
}

export const PaginationContext = createContext<ContextType>(defaultValue)

export const PaginationProvider = ({ children }: Props) => {
  const [page, setPage] = useState(defaultValue.page)
  const [total, setTotal] = useState(defaultValue.total)

  return (
    <PaginationContext.Provider value={{ page, setPage, total, setTotal }}>
      {children}
    </PaginationContext.Provider>
  )
}
