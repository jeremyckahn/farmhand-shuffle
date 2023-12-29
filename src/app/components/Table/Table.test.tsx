import { render, screen } from '@testing-library/react'

import { stubGame } from '../../../test-utils/stubs/game'

import { Table, TableProps } from './Table'

const game = stubGame()
const playerIds = Object.keys(game.table.players)

const nonUserPlayers = playerIds.filter(
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

  test.each([nonUserPlayers])(
    'renders fields for non-user players',
    playerId => {
      render(<StubTable />)
      const field = screen.getByTestId(`field_${playerId}`)

      expect(field).toBeInTheDocument()
    }
  )
})
