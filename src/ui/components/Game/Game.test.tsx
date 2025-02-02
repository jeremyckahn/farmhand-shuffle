import { render, screen } from '@testing-library/react'

import { stubPlayer1, stubPlayer2 } from '../../../test-utils/stubs/players'

import { Game } from './Game'

describe('Game', () => {
  test('renders table', () => {
    render(
      <Game
        playerSeeds={[stubPlayer1, stubPlayer2]}
        userPlayerId={stubPlayer1.id}
      />
    )

    const table = screen.getByTestId(`table_${stubPlayer1.id}`)

    expect(table).toBeInTheDocument()
  })
})
