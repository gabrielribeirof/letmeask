export type ThemeType = {
  name: string
  boxShadow: string

  colors: {
    text: string
    border: string

    purple: string
    darger: string
    pink: string
    gray: {
      dark: string
      medium: string
      light: string
    },
    hover: {
      purple: string
      darger: string
      gray: string
    },

    background: {
      main: string
      container: string
      questions: {
        highlighted: string
        answered: string
      }
    }
  }
}
