import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { instantiate, water } from '../../../game/cards'
import { updatePlayer } from '../../../game/reducers/update-player'
import {
  stubCarrot,
  stubPumpkin,
  stubWater,
} from '../../../test-utils/stubs/cards'
import { stubGame } from '../../../test-utils/stubs/game'
import { StubShellContext } from '../../test-utils/StubShellContext'
import { isSxArray } from '../../type-guards'
import { cardClassName } from '../Card/CardCore'
import { CardProps } from '../Card/types'
import { ActorContext } from '../Game/ActorContext'

import { getGapPixelWidth, Hand, HandProps } from './Hand'

// NOTE: Mocking out the Card component improves test execution speed
vi.mock('../Card/Card', async () => {
  const { cardClassName } = await vi.importActual<
    typeof import('../Card/CardCore')
  >('../Card/CardCore')

  return {
    Card: vi.fn(
      ({
        cardInstance,
        sx,
        // Destructure and ignore props that are not valid for a div
        disableEnterAnimation,
        cardIdx,
        playerId,
        paperProps,
        onBeforePlay,
        isFocused,
        ...props
      }: CardProps) => {
        const style: React.CSSProperties = {}
        if (sx) {
          const sxObject = isSxArray(sx)
            ? // @ts-expect-error This is enough for the mock
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              sx.reduce((acc, curr) => ({ ...acc, ...curr }), {})
            : sx
          // @ts-expect-error This is enough for the mock
          if (sxObject?.transform) {
            // @ts-expect-error This is enough for the mock
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, functional/immutable-data
            style.transform = sxObject.transform
          }
        }

        return (
          // @ts-expect-error This is enough for the mock
          <div {...props} className={cardClassName} style={style}>
            {cardInstance.name}
          </div>
        )
      }
    ),
  }
})

const baseGame = stubGame()

const handCards = [stubCarrot, stubPumpkin, stubWater]
const game = updatePlayer(baseGame, baseGame.sessionOwnerPlayerId, {
  hand: handCards,
})

const StubHand = (overrides: Partial<HandProps>) => {
  return (
    <StubShellContext>
      <ActorContext.Provider>
        <Hand game={game} playerId={game.sessionOwnerPlayerId} {...overrides} />
      </ActorContext.Provider>
    </StubShellContext>
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
    expect(card1Transform).toMatchInlineSnapshot(
      `"translate(calc(512px - calc(0px + 16rem / 2)), calc(384px - calc(0px + 28rem / 2))) scale(1)"`
    )

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
    expect(card1Transform).toMatchInlineSnapshot(
      `"translateX(calc(-50% + 50px + -150px)) translateY(0rem) rotate(-5deg) scale(1) rotateY(25deg)"`
    )
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

    await waitFor(async () => {
      await userEvent.keyboard('{Tab}')
    })

    const { transform: card1Transform } = getComputedStyle(card1!)
    expect(card1Transform).toMatchInlineSnapshot(
      `"translateX(calc(-50% + 50px + -150px)) translateY(calc(28rem / 2)) rotate(-5deg) scale(0.65) rotateY(25deg)"`
    )

    const { transform: card2Transform } = getComputedStyle(card2!)
    expect(card2Transform).toMatchInlineSnapshot(
      `"translate(calc(512px - calc(0px + 16rem / 2)), calc(384px - calc(0px + 28rem / 2))) scale(1)"`
    )
  })

  test('focus can be escaped', async () => {
    render(<StubHand />)

    const card1 = screen
      .getByText(handCards[0].name)
      .closest(`.${cardClassName}`)

    await userEvent.click(card1!)

    await waitFor(async () => {
      await userEvent.keyboard('{Escape}')
    })

    const { transform: card1Transform } = getComputedStyle(card1!)
    expect(card1Transform).toMatchInlineSnapshot(
      `"translateX(calc(-50% + 50px + -150px)) translateY(0rem) rotate(-5deg) scale(1) rotateY(25deg)"`
    )
    expect(document.activeElement).toBe(document.body)
  })

  test('receiving a new hand resets focus', async () => {
    render(<StubHand />)

    const card1 = screen
      .getByText(handCards[0].name)
      .closest(`.${cardClassName}`)

    await userEvent.click(card1!)

    const newHand = [...handCards, instantiate(water)]
    const newGame = updatePlayer(game, game.sessionOwnerPlayerId, {
      hand: newHand,
    })

    render(<StubHand game={newGame} />)

    const { transform: card1Transform } = getComputedStyle(card1!)
    expect(card1Transform).toMatchInlineSnapshot(
      `"translateX(calc(-50% + 50px + -150px)) translateY(0rem) rotate(-5deg) scale(1) rotateY(25deg)"`
    )
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
