import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { IMatch, IPlayer, CardType, CardInstance } from '../../../game/types'
import { CardProps } from '../Card/types'
import { stubTable } from '../../../test-utils/stubs/table'
import { stubMatch } from '../../../test-utils/stubs/match'

import { DiscardPile } from './DiscardPile'

const theme = createTheme()

const mockCardInstance: CardInstance = {
  id: 'carrot',
  name: 'Carrot',
  type: CardType.CROP,
  instanceId: '123',
  waterToMature: 0,
}

const mockPlayer: IPlayer = {
  id: 'player1',
  funds: 0,
  deck: [],
  hand: [],
  discardPile: [mockCardInstance],
  field: { crops: [] },
  cardsPlayedDuringTurn: [],
}

const mockMatch: IMatch = stubMatch({
  sessionOwnerPlayerId: 'player1',
  table: stubTable({
    players: {
      player1: mockPlayer,
    },
  }),
})

vi.mock('../Card', () => ({
  Card: ({ cardInstance }: CardProps) => (
    <div data-testid="mock-card">{cardInstance.name}</div>
  ),
}))

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)
}

describe('DiscardPile', () => {
  it('renders discard pile with cards', () => {
    renderWithTheme(<DiscardPile match={mockMatch} playerId="player1" />)
    expect(screen.getByTestId('discard-pile_player1')).toBeInTheDocument()
    expect(screen.getByTestId('mock-card')).toBeInTheDocument()
    expect(screen.getByText('Carrot')).toBeInTheDocument()
  })
})
