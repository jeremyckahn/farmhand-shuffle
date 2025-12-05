import { render, screen } from '@testing-library/react'

import { stubPlayer1, stubPlayer2 } from '../../../test-utils/stubs/players'

import { MatchPage } from './MatchPage'

const { mockMatch } = vi.hoisted(() => ({
  mockMatch: vi.fn(() => <div data-testid="match-component" />),
}))

vi.mock('../../components/Match', () => ({
  Match: mockMatch,
}))

describe('MatchPage', () => {
  test('renders Match component and passes props correctly', () => {
    render(
      <MatchPage
        playerSeeds={[stubPlayer1, stubPlayer2]}
        userPlayerId={stubPlayer1.id}
      />
    )

    expect(screen.getByTestId('match-component')).toBeInTheDocument()
    expect(mockMatch).toHaveBeenCalledWith(
      {
        playerSeeds: [stubPlayer1, stubPlayer2],
        userPlayerId: stubPlayer1.id,
        fullHeight: true,
      },
      {}
    )
  })
})
