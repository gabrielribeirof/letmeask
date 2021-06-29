import { ThemeType } from '../theme-type'

export const dark: ThemeType = {
  name: 'dark',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',

  colors: {
    text: '#F8F8F8',
    border: '#575454',

    purple: '#4B0082',
    darger: '#8A0E24',
    pink: '#E559F9',
    gray: {
      dark: '#737380',
      medium: '#555555',
      light: '#DBDCDD'
    },

    hover: {
      purple: '#36005C',
      darger: '#D73754',
      gray: '#7E7E86',
    },

    background: {
      main: '#000000',
      container: '#131213',
      questions: {
        highlighted: '#222454',
        answered: '#222333'
      }
    }
  }
}
