import { render, screen } from '@testing-library/react'

import { lookup } from '../../../game/services/Lookup'
import { stubGame } from '../../../test-utils/stubs/game'

import { Table, TableProps } from './Table'

const game = stubGame()
const playerIds = lookup.getOpponentPlayerIds(game)

const opponentPlayerIds = playerIds.filter(
  playerId => playerId !== game.userPlayerId
)

const StubTable = (overrides: Partial<TableProps>) => {
  return <Table game={game} {...overrides} />
}

describe('Table', () => {
  test('renders field for user player', () => {
    render(<StubTable />)
    const field = screen.getByTestId(`field_${game.userPlayerId}`)

    expect(field).toBeInTheDocument()
  })

  test.each([opponentPlayerIds])(
    'renders fields for non-user players',
    playerId => {
      render(<StubTable />)
      const field = screen.getByTestId(`field_${playerId}`)

      expect(field).toBeInTheDocument()
    }
  )
})
