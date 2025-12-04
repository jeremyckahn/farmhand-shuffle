import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { stubDeck } from './test-utils/stubs/deck'
import { stubPlayer } from './test-utils/stubs/players'
import { MatchPage } from './ui/pages/MatchPage'
import { lightTheme } from './ui/theme'

// NOTE: This is temporary glue code to be replaced by UX that enables players
// to build their own decks.
const deck = stubDeck()
const player1 = stubPlayer({ deck })
const player2 = stubPlayer({ deck })

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/match" replace />,
  },
  {
    path: '/match',
    element: (
      <MatchPage
        playerSeeds={[player1, player2]}
        userPlayerId={player1.id}
      />
    ),
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
