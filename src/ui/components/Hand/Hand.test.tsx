import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { instantiate, water } from '../../../game/cards'
import { updatePlayer } from '../../../game/reducers/update-player'
import {
  stubCarrot,
  stubPumpkin,
  stubWater,
} from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'
import { StubShellContext } from '../../test-utils/StubShellContext'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { isSxArray } from '../../type-guards'
import { CardSize } from '../../types'
import { cardClassName } from '../Card/CardCore'
import { CardProps } from '../Card/types'
import { ActorContext } from '../Match/ActorContext'
import { ShellContextProps } from '../Match/ShellContext'
import { assertIsNonNullable } from '../../../game/types/assertions'

import { focusedCardSize, getGapPixelWidth, Hand, HandProps } from './Hand'

// NOTE: Mocking out the Card component improves test execution speed
vi.mock('../Card/Card', async () => {
  const { cardClassName } = await vi.importActual<
    typeof import('../Card/CardCore')
  >('../Card/CardCore')
  const { forwardRef } = await vi.importActual<typeof import('react')>('react')

  return {
    // NOTE: forwardRef lets Hand's selectedCardRef reach the rendered card,
    // which is necessary for testing Hand's focus management.
    Card: forwardRef<HTMLDivElement, CardProps>(function Card(
      {
        cardInstance,
        sx,
        // Destructure and ignore props that are not valid for a div
        disableEnterAnimation,
        cardIdxInField,
        cardIdxInHand,
        cropIdxInFieldToHarvest,
        cropIdxInFieldToWater,
        playerId,
        paperProps,
        onBeforePlay,
        isFocused,
        stackActionButtonsBelowCard,
        ...props
      },
      ref
    ) {
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
        <div
          {...props}
          ref={ref}
          className={cardClassName}
          style={style}
          data-stack-action-buttons-below-card={String(
            stackActionButtonsBelowCard
          )}
        >
          {cardInstance.name}
        </div>
      )
    }),
  }
})

const baseMatch = stubMatch()

const handCards = [stubCarrot, stubPumpkin, stubWater]
const match = updatePlayer(baseMatch, baseMatch.sessionOwnerPlayerId, {
  hand: handCards,
})

const StubHand = ({
  isNarrowViewport = false,
  shellContextOverrides = {},
  ...overrides
}: Partial<HandProps> & {
  isNarrowViewport?: boolean
  shellContextOverrides?: Partial<ShellContextProps>
}) => {
  return (
    <StubShellContext
      isNarrowViewport={isNarrowViewport}
      {...shellContextOverrides}
    >
      <ActorContext.Provider>
        <Hand
          match={match}
          playerId={match.sessionOwnerPlayerId}
          {...overrides}
        />
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
      .getByText(handCards[0]!.name)
      .closest(`.${cardClassName}`)

    await userEvent.click(card1!)

    const { transform: card1Transform } = getComputedStyle(card1!)

    expect(card1Transform).toMatchInlineSnapshot(
      `"translate(calc(512px - calc(0px + 12rem / 2)), calc(384px - calc(0px + 21rem / 2))) scale(1) translateY(0)"`
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
      .getByText(handCards[0]!.name)
      .closest(`.${cardClassName}`)

    await userEvent.click(card1!)

    await waitFor(() => {
      ;(document.activeElement as HTMLElement).blur()
    })

    const { transform: card1Transform } = getComputedStyle(card1!)

    expect(card1Transform).toMatchInlineSnapshot(
      `"translateX(calc(-50% + 66.66666666666666px + -199.99999999999997px)) translateY(0rem) rotate(-5deg) scale(1) rotateY(25deg) translateY(0)"`
    )
  })

  test('supports tab navigation', async () => {
    render(<StubHand />)

    const card1 = screen
      .getByText(handCards[0]!.name)
      .closest(`.${cardClassName}`)
    const card2 = screen
      .getByText(handCards[1]!.name)
      .closest(`.${cardClassName}`)

    await userEvent.click(card1!)

    await waitFor(async () => {
      await userEvent.keyboard('{Tab}')
    })

    const { transform: card1Transform } = getComputedStyle(card1!)

    expect(card1Transform).toMatchInlineSnapshot(
      `"translateX(calc(-50% + 66.66666666666666px + -199.99999999999997px)) translateY(calc(28rem / 2)) rotate(-5deg) scale(0.65) rotateY(25deg) translateY(0)"`
    )

    const { transform: card2Transform } = getComputedStyle(card2!)

    expect(card2Transform).toMatchInlineSnapshot(
      `"translate(calc(512px - calc(0px + 12rem / 2)), calc(384px - calc(0px + 21rem / 2))) scale(1) translateY(0)"`
    )
  })

  test('focus can be escaped', async () => {
    render(<StubHand />)

    const card1 = screen
      .getByText(handCards[0]!.name)
      .closest(`.${cardClassName}`)

    await userEvent.click(card1!)

    await waitFor(async () => {
      await userEvent.keyboard('{Escape}')
    })

    const { transform: card1Transform } = getComputedStyle(card1!)

    expect(card1Transform).toMatchInlineSnapshot(
      `"translateX(calc(-50% + 66.66666666666666px + -199.99999999999997px)) translateY(0rem) rotate(-5deg) scale(1) rotateY(25deg) translateY(0)"`
    )
    expect(document.activeElement).toBe(document.body)
  })

  test('receiving a new hand resets focus', async () => {
    render(<StubHand />)

    const card1 = screen
      .getByText(handCards[0]!.name)
      .closest(`.${cardClassName}`)

    await userEvent.click(card1!)

    const newHand = [...handCards, instantiate(water)]
    const newMatch = updatePlayer(match, match.sessionOwnerPlayerId, {
      hand: newHand,
    })

    render(<StubHand match={newMatch} />)

    const { transform: card1Transform } = getComputedStyle(card1!)

    expect(card1Transform).toMatchInlineSnapshot(
      `"translateX(calc(-50% + 66.66666666666666px + -199.99999999999997px)) translateY(0rem) rotate(-5deg) scale(1) rotateY(25deg) translateY(0)"`
    )
    expect(document.activeElement).toBe(document.body)
  })

  test('the focused card is always focusedCardSize, regardless of the hand baseline cardSize', async () => {
    render(<StubHand cardSize={CardSize.COMPACT} />)

    const card1 = screen
      .getByText(handCards[0]!.name)
      .closest(`.${cardClassName}`)

    assertIsNonNullable(card1)

    await userEvent.click(card1)

    const { transform: card1Transform } = getComputedStyle(card1)

    expect(card1Transform).toContain(
      `${CARD_DIMENSIONS[focusedCardSize].width} / 2`
    )
    expect(card1Transform).toContain(
      `${CARD_DIMENSIONS[focusedCardSize].height} / 2`
    )
  })

  test('fan-out spacing shrinks proportionally with a smaller cardSize', async () => {
    render(<StubHand cardSize={CardSize.COMPACT} />)

    const card1 = screen
      .getByText(handCards[0]!.name)
      .closest(`.${cardClassName}`)

    assertIsNonNullable(card1)

    await userEvent.click(card1)
    await waitFor(() => {
      ;(document.activeElement as HTMLElement).blur()
    })

    const { transform } = getComputedStyle(card1)
    const expectedScale =
      parseFloat(CARD_DIMENSIONS[CardSize.COMPACT].width) /
      parseFloat(CARD_DIMENSIONS[focusedCardSize].width)
    const expectedGapWidthPx = 50 * expectedScale

    expect(transform).toContain(`${expectedGapWidthPx}px`)
  })

  test('stacks action buttons below the card on a narrow viewport', () => {
    render(<StubHand isNarrowViewport={true} />)

    const card1 = screen
      .getByText(handCards[0]!.name)
      .closest(`.${cardClassName}`)

    expect(card1).toHaveAttribute(
      'data-stack-action-buttons-below-card',
      'true'
    )
  })

  test('does not stack action buttons below the card on a large viewport', () => {
    render(<StubHand isNarrowViewport={false} />)

    const card1 = screen
      .getByText(handCards[0]!.name)
      .closest(`.${cardClassName}`)

    expect(card1).toHaveAttribute(
      'data-stack-action-buttons-below-card',
      'false'
    )
  })

  describe('when the hand card selection is locked', () => {
    const setSelectedHandCardIdx = vi.fn()
    const shellContextOverrides: Partial<ShellContextProps> = {
      isHandCardSelectionLocked: true,
      selectedHandCardIdx: 0,
      isHandCardSelected: true,
      setSelectedHandCardIdx,
    }

    const renderLockedHand = () => {
      render(<StubHand shellContextOverrides={shellContextOverrides} />)

      // NOTE: Hand resets the selection when it first receives its cards,
      // which is not what these tests are concerned with.
      setSelectedHandCardIdx.mockClear()
    }

    // NOTE: Mirrors the Hand being re-shown mid-placement, which moves DOM
    // focus back onto the card being placed.
    const focusSelectedCard = () => {
      const card1 = screen
        .getByText(handCards[0]!.name)
        .closest<HTMLElement>(`.${cardClassName}`)

      card1!.focus()
    }

    test('focusing another card does not change the selection', async () => {
      renderLockedHand()

      const card2 = screen
        .getByText(handCards[1]!.name)
        .closest(`.${cardClassName}`)

      await userEvent.click(card2!)

      expect(setSelectedHandCardIdx).not.toHaveBeenCalled()
    })

    test('losing focus does not reset the selection', async () => {
      renderLockedHand()
      focusSelectedCard()

      await waitFor(() => {
        ;(document.activeElement as HTMLElement).blur()
      })

      expect(setSelectedHandCardIdx).not.toHaveBeenCalled()
    })

    test('the selected card regains focus when the lock is lifted', () => {
      const { rerender } = render(
        <StubHand shellContextOverrides={shellContextOverrides} />
      )

      focusSelectedCard()
      ;(document.activeElement as HTMLElement).blur()

      rerender(
        <StubHand
          shellContextOverrides={{
            ...shellContextOverrides,
            isHandCardSelectionLocked: false,
          }}
        />
      )

      const card1 = screen
        .getByText(handCards[0]!.name)
        .closest(`.${cardClassName}`)

      expect(document.activeElement).toBe(card1)
    })

    test('pressing Escape does not reset the selection', async () => {
      renderLockedHand()
      focusSelectedCard()

      await waitFor(async () => {
        await userEvent.keyboard('{Escape}')
      })

      expect(setSelectedHandCardIdx).not.toHaveBeenCalled()
    })
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
