import { render, screen } from '@testing-library/react'

import { stubPlayer1, stubPlayer2 } from '../../../test-utils/stubs/players'

import { MatchPage } from './MatchPage'

vi.mock('../../components/Match', () => ({
  Match: () => <div data-testid="match-component" />,
}))

describe('MatchPage', () => {
  test('renders Match component', () => {
    render(
      <MatchPage
        playerSeeds={[stubPlayer1, stubPlayer2]}
        userPlayerId={stubPlayer1.id}
      />
    )

    expect(screen.getByTestId('match-component')).toBeInTheDocument()
  })
})
