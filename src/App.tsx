import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ErrorBoundary } from './ui/components/ErrorBoundary'
import { BuildDeck } from './ui/pages/BuildDeck'
import { MainMenu } from './ui/pages/MainMenu'
import { MatchPage } from './ui/pages/MatchPage'
import { AppRoute } from './ui/types'
import { lightTheme } from './ui/theme'

const router = createBrowserRouter([
  {
    path: AppRoute.ROOT,
    element: <MainMenu />,
  },
  {
    path: AppRoute.MATCH,
    element: (
      <ErrorBoundary>
        <MatchPage />
      </ErrorBoundary>
    ),
  },
  {
    path: AppRoute.BUILD_DECK,
    element: <BuildDeck />,
  },
])

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
