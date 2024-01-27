import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { carrot, pumpkin, water } from '../../../game/cards'
import { updatePlayer } from '../../../game/reducers/update-player'
import { stubGame } from '../../../test-utils/stubs/game'
import { cardClassName } from '../Card/CardTemplate'

import {
  getGapPixelWidth,
  Hand,
  HandProps,
  selectedCardTransform,
} from './Hand'

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
      const card = screen.getByText(name).closest(`.${cardClassName}`)

      const { transform } = getComputedStyle(card!)
      expect(transform).toMatchSnapshot()
    }
  })

  test('clicking a card selects it', async () => {
    render(<StubHand />)

    const card1 = screen
      .getByText(handCards[0].name)
      .closest(`.${cardClassName}`)
    await userEvent.click(card1!)

    const { transform: card1Transform } = getComputedStyle(card1!)
    expect(card1Transform).toEqual(selectedCardTransform)

    for (const { name } of handCards.slice(1)) {
      const card = screen.getByText(name).closest(`.${cardClassName}`)

      const { transform } = getComputedStyle(card!)
      expect(transform).toMatchSnapshot()
    }
  })

  test('losing focus resets the card selection', async () => {
    render(<StubHand />)

    const card1 = screen
      .getByText(handCards[0].name)
      .closest(`.${cardClassName}`)

    await userEvent.click(card1!)

    await waitFor(() => {
      ;(document.activeElement as HTMLElement).blur()
    })

    const { transform: card1Transform } = getComputedStyle(card1!)
    expect(card1Transform).not.toEqual(selectedCardTransform)
  })

  test('supports tab navigation', async () => {
    render(<StubHand />)

    const card1 = screen
      .getByText(handCards[0].name)
      .closest(`.${cardClassName}`)
    const card2 = screen
      .getByText(handCards[1].name)
      .closest(`.${cardClassName}`)

    await userEvent.click(card1!)

    await waitFor(() => {
      userEvent.keyboard('{Tab}')
    })

    const { transform: card1Transform } = getComputedStyle(card1!)
    expect(card1Transform).not.toEqual(selectedCardTransform)

    const { transform: card2Transform } = getComputedStyle(card2!)
    expect(card2Transform).toEqual(selectedCardTransform)
  })

  test('focus can be escaped', async () => {
    render(<StubHand />)

    const card1 = screen
      .getByText(handCards[0].name)
      .closest(`.${cardClassName}`)

    await userEvent.click(card1!)

    await waitFor(() => {
      userEvent.keyboard('{Escape}')
    })

    const { transform: card1Transform } = getComputedStyle(card1!)
    expect(card1Transform).not.toEqual(selectedCardTransform)
    expect(document.activeElement).toBe(document.body)
  })

  describe('getGapPixelWidth', () => {
    test.each([
      { numberOfCards: 0, gapSize: 50 },
      { numberOfCards: 6, gapSize: 30 },
      { numberOfCards: 11, gapSize: 15 },
      { numberOfCards: 21, gapSize: 10 },
      { numberOfCards: 31, gapSize: 5 },
      { numberOfCards: 61, gapSize: 3 },
      { numberOfCards: 1000, gapSize: 3 },
    ])(
      'calculates gap size for $numberOfCards cards',
      ({ gapSize, numberOfCards }) => {
        expect(getGapPixelWidth(numberOfCards)).toEqual(gapSize)
      }
    )
  })
})
