import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { FiltersProvider } from '../contexts/FiltersContext'
import { PaginationProvider } from '../contexts/PaginationContext'
import GlobalStyle from '../styles/global'
import { theme } from '../styles/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    router.prefetch = () => Promise.resolve()
  }, [router])

  return (
    <PaginationProvider>
      <FiltersProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </FiltersProvider>
    </PaginationProvider>
  )
}
