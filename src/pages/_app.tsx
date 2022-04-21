import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import GlobalStyle from '../styles/global'
import { FiltersProvider } from '../contexts/FiltersContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FiltersProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </FiltersProvider>
  )
}
