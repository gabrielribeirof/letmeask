import { ThemeType } from '../theme-type'

export const light: ThemeType = {
  name: 'light',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',

  colors: {
    text: '#29292E',
    border: '#E2E2E2',

    purple: '#835AFD',
    darger: '#E73F5D',
    pink: '#E559F9',
    gray: {
      dark: '#737380',
      medium: '#A8A8B3',
      light: '#DBDCDD'
    },
    hover: {
      purple: '#6F4BD8',
      darger: '#D73754',
      gray: '#7E7E86',
    },

    background: {
      main: '#F8F8F8',
      container: '#FEFEFE',
      questions: {
        highlighted: '#F4F0FF',
        answered: '#DBDCDD'
      }
    },
  }
}
