import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #F8F8F8;
  }

  body, input, button, textarea {
    font: 400 14px 'Montserrat', sans-serif;
    outline: 0;
  }
`