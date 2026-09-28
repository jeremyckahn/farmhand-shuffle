import { render, screen } from '@testing-library/react'

import { mockUseMediaQuery } from '../../../test-utils/mocks/useMediaQuery'
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

  test('shows the hide/show hand button on a large viewport', () => {
    vi.spyOn(console, 'debug').mockImplementation(() => {})
    mockUseMediaQuery.mockReturnValue(false)

    render(
      <Match
        playerSeeds={[stubPlayer1, stubPlayer2]}
        userPlayerId={stubPlayer1.id}
      />
    )

    expect(screen.queryByTestId('KeyboardArrowDownIcon')).toBeInTheDocument()
  })

  test('hides the hide/show hand button on a narrow viewport', () => {
    vi.spyOn(console, 'debug').mockImplementation(() => {})
    mockUseMediaQuery.mockReturnValue(true)

    render(
      <Match
        playerSeeds={[stubPlayer1, stubPlayer2]}
        userPlayerId={stubPlayer1.id}
      />
    )

    expect(
      screen.queryByTestId('KeyboardArrowDownIcon')
    ).not.toBeInTheDocument()
  })
})
