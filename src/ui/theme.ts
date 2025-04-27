import createTheme from '@mui/material/styles/createTheme'

// NOTE: Use https://zenoo.github.io/mui-theme-creator/ to help define theme values.

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      paper: '#ffecb8',
      default: '#cb8447',
    },
  },
})

export const darkTheme = createTheme({ palette: { mode: 'dark' } })
