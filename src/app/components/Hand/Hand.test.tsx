import { render, screen } from '@testing-library/react'

import { carrot, pumpkin, water } from '../../../game/cards/index'
import { updatePlayer } from '../../../game/reducers/update-player/index'
import { stubGame } from '../../../test-utils/stubs/game'

import { Hand, HandProps } from './Hand'

const baseGame = stubGame()

const handCards = [carrot, pumpkin, water]
const game = updatePlayer(baseGame, baseGame.sessionOwnerPlayerId, {
  hand: handCards.map(({ id }) => id),
})

const StubHand = (overrides: Partial<HandProps>) => {
  return (
    <Hand game={game} playerId={game.sessionOwnerPlayerId} {...overrides} />
  )
}

describe('Hand', () => {
  test('renders unselected cards', () => {
    render(<StubHand />)

    for (const { name } of handCards) {
      const card = screen.getByText(name).closest('.MuiPaper-root')

      const card1Position = getComputedStyle(card!).transform
      expect(card1Position).toMatchSnapshot()
    }
  })
})
