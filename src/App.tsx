import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { stubDeck } from './test-utils/stubs/deck'
import { stubPlayer } from './test-utils/stubs/players'
import { DeckBuilder } from './ui/pages/DeckBuilder'
import { MainMenu } from './ui/pages/MainMenu'
import { MatchPage } from './ui/pages/MatchPage'
import { AppRoute } from './ui/types'
import { lightTheme } from './ui/theme'

// NOTE: This is temporary glue code to be replaced by UX that enables players
// to build their own decks.
const deck = stubDeck()
const player1 = stubPlayer({ deck })
const player2 = stubPlayer({ deck })

const router = createBrowserRouter([
  {
    path: AppRoute.ROOT,
    element: <MainMenu />,
  },
  {
    path: AppRoute.MATCH,
    element: (
      <MatchPage playerSeeds={[player1, player2]} userPlayerId={player1.id} />
    ),
  },
  {
    path: AppRoute.DECK_BUILDER,
    element: <DeckBuilder />,
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
