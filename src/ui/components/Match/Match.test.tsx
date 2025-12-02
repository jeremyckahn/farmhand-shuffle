import { render, screen } from '@testing-library/react'

import { stubPlayer1, stubPlayer2 } from '../../../test-utils/stubs/players'

import { Match } from './Match'

// NOTE: Mocking out the Card component improves test execution speed
vi.mock('../Card', () => ({
  Card: () => <div data-testid="mock-card" />,
}))

describe('Match', () => {
  test('renders table', () => {
    vi.spyOn(console, 'debug').mockImplementation(() => {})

    render(
      <Match
        playerSeeds={[stubPlayer1, stubPlayer2]}
        userPlayerId={stubPlayer1.id}
      />
    )

    const table = screen.getByTestId(`table_${stubPlayer1.id}`)

    expect(table).toBeInTheDocument()
  })
})
