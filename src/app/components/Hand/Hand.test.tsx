import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { carrot, pumpkin, water } from '../../../game/cards/index'
import { updatePlayer } from '../../../game/reducers/update-player/index'
import { stubGame } from '../../../test-utils/stubs/game'

import { Hand, HandProps, selectedCardTransform } from './Hand'

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
  test('renders hand with no cards are selected', () => {
    render(<StubHand />)

    for (const { name } of handCards) {
      const card = screen.getByText(name).closest('.MuiPaper-root')

      const { transform } = getComputedStyle(card!)
      expect(transform).toMatchSnapshot()
    }
  })

  test('renders hand with a card selected', async () => {
    render(<StubHand />)

    const card1 = screen.getByText(handCards[0].name).closest('.MuiPaper-root')
    await userEvent.click(card1!)

    const { transform: card1Tranform } = getComputedStyle(card1!)
    expect(card1Tranform).toEqual(selectedCardTransform)

    for (const { name } of handCards.slice(1)) {
      const card = screen.getByText(name).closest('.MuiPaper-root')

      const { transform } = getComputedStyle(card!)
      expect(transform).toMatchSnapshot()
    }
  })
})
