import { render, screen } from '@testing-library/react'

import { stubGame } from '../../../test-utils/stubs/game'

import { Game } from './Game'

const game = stubGame()

describe('Game', () => {
  test('renders table', () => {
    render(<Game game={game} />)

    const table = screen.getByTestId(`table_${game.userPlayerId}`)

    expect(table).toBeInTheDocument()
  })
})
