import CssBaseline from '@mui/material/CssBaseline'

import { stubDeck } from './test-utils/stubs/deck'
import { stubPlayer } from './test-utils/stubs/players'
import { Game } from './ui/components/Game'

// NOTE: This is temporary glue code to be replaced by UX that enables players
// to build their own decks.
const deck = stubDeck()
const player1 = stubPlayer({ deck })
const player2 = stubPlayer({ deck })

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Game playerSeeds={[player1, player2]} userPlayerId={player1.id} />
    </>
  )
}
