import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;

    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgb(219,219,219);
      border-radius: 20px;
    }

    &::-webkit-scrollbar-track {
      background: #fff;
    }
  }

  button,
  input {
    font-family: inherit;
  }
`
