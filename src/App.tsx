import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'

import { stubDeck } from './test-utils/stubs/deck'
import { stubPlayer } from './test-utils/stubs/players'
import { Game } from './ui/components/Game'
import { lightTheme } from './ui/theme'

// NOTE: This is temporary glue code to be replaced by UX that enables players
// to build their own decks.
const deck = stubDeck()
const player1 = stubPlayer({ deck })
const player2 = stubPlayer({ deck })

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Game
        fullHeight
        playerSeeds={[player1, player2]}
        userPlayerId={player1.id}
      />
    </ThemeProvider>
  )
}
