import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { sprinkler } from '../../../game/cards'
import { updateField } from '../../../game/reducers/update-field'
import { factory } from '../../../game/services/Factory'
import {
  stubCarrot,
  stubPumpkin,
  stubSprinkler,
} from '../../../test-utils/stubs/cards'
import { stubMatch } from '../../../test-utils/stubs/match'
import { StubShellContext } from '../../test-utils/StubShellContext'
import { isSxArray } from '../../type-guards'
import { CardProps } from '../Card/types'
import { ActorContext } from '../Match/ActorContext'

import {
  Field,
  FieldProps,
  rotationTransform,
  selectedCardLabel,
  unselectedCardLabel,
} from '.'

// NOTE: Mocking out the Card component improves test execution speed
vi.mock('../Card', () => ({
  Card: ({
    cardInstance,
    cardIdx,
    playerId,
    isFlipped,
    canBeWatered,
    canBeHarvested,
    isInField,
    isFocused,
    paperProps,
    sx,
    ...rest
  }: CardProps) => {
    const style = sx && isSxArray(sx) ? sx?.[0] || {} : {}

    if ('playedCard' in rest) {
      // NOTE: Prevents a harmless warning in the tests
      // eslint-disable-next-line functional/immutable-data
      delete rest.playedCard
    }

    return (
      // @ts-expect-error Type error is acceptable for tests
      <div {...rest} style={style}>
        <label>{cardInstance.name}</label>
      </div>
    )
  },
}))

let matchStub = stubMatch()
const opponentPlayerId = Object.keys(matchStub.table.players)[1]

if (!opponentPlayerId) {
  throw new Error('Opponent player not found')
}

const cropsStub = [
  undefined,
  { ...factory.buildPlayedCrop(stubCarrot), waterCards: 1 },
  undefined,
  { ...factory.buildPlayedCrop(stubPumpkin), waterCards: 3 },
]

matchStub = updateField(matchStub, matchStub.sessionOwnerPlayerId, {
  cards: cropsStub,
})

matchStub = updateField(matchStub, opponentPlayerId, {
  cards: cropsStub,
})

const StubField = (overrides: Partial<FieldProps>) => {
  return (
    <StubShellContext>
      <ActorContext.Provider>
        <Field
          match={matchStub}
          playerId={matchStub.sessionOwnerPlayerId}
          {...overrides}
        />
      </ActorContext.Provider>
    </StubShellContext>
  )
}

describe('Field', () => {
  test('renders crop cards for self', () => {
    render(<StubField />)

    const playedCrops = screen.getAllByLabelText(unselectedCardLabel)

    for (const playedCrop of playedCrops) {
      const { transform } = getComputedStyle(playedCrop)

      expect(transform).toMatchSnapshot()
    }
  })

  test('renders playable tool cards', () => {
    const match = updateField(matchStub, matchStub.sessionOwnerPlayerId, {
      cards: [factory.buildPlayedTool(stubSprinkler)],
    })

    render(<StubField match={match} />)

    const playedTool = screen.getByText(sprinkler.name)

    expect(playedTool).toBeInTheDocument()
  })

  test('renders crop cards for opponent upside-down', () => {
    render(<StubField playerId={opponentPlayerId} />)

    const playedCrops = screen.getAllByLabelText(unselectedCardLabel)

    for (const playedCrop of playedCrops) {
      const { transform } = getComputedStyle(playedCrop)

      expect(transform).toMatchSnapshot()
      expect(transform).toContain(rotationTransform)
    }
  })

  test('clicking a card selects it', async () => {
    render(<StubField />)

    const [playedCrop1, ...restPlayedCrops] =
      screen.getAllByLabelText(unselectedCardLabel)

    if (!playedCrop1) {
      throw new Error('Crop not found')
    }

    await userEvent.click(playedCrop1)

    const { transform: playedCrop1Transform } = getComputedStyle(playedCrop1)

    expect(playedCrop1Transform).toMatchInlineSnapshot(
      `"translateX(512px) translateY(359px) scale(1.25)"`
    )
    expect(playedCrop1).toHaveAttribute('aria-label', selectedCardLabel)

    for (const playedCrop of restPlayedCrops) {
      const { transform } = getComputedStyle(playedCrop)

      expect(transform).toMatchSnapshot()
      expect(playedCrop).toHaveAttribute('aria-label', unselectedCardLabel)
    }
  })

  test("clicking an opponent's card selects it", async () => {
    render(<StubField playerId={opponentPlayerId} />)

    const [playedCrop1] = screen.getAllByLabelText(unselectedCardLabel)

    if (!playedCrop1) {
      throw new Error('Crop not found')
    }

    await userEvent.click(playedCrop1)

    const { transform } = getComputedStyle(playedCrop1)

    expect(transform).toMatchInlineSnapshot(
      `"translateX(512px) translateY(409px) scale(1.25)"`
    )
    expect(transform).not.toContain(rotationTransform)
  })

  test('losing focus resets the card selection', async () => {
    render(<StubField />)

    const [playedCrop1] = screen.getAllByLabelText(unselectedCardLabel)

    if (!playedCrop1) {
      throw new Error('Crop not found')
    }

    await userEvent.click(playedCrop1)

    await waitFor(() => {
      ;(document.activeElement as HTMLElement).blur()
    })

    const { transform } = getComputedStyle(playedCrop1)

    expect(transform).toMatchInlineSnapshot(`""`)
    expect(playedCrop1).toHaveAttribute('aria-label', unselectedCardLabel)
  })

  test('supports tab navigation', async () => {
    render(<StubField />)

    const [playedCrop1, playedCrop2] =
      screen.getAllByLabelText(unselectedCardLabel)

    if (!playedCrop1 || !playedCrop2) {
      throw new Error('Crops not found')
    }

    await userEvent.click(playedCrop1)

    await waitFor(async () => {
      await userEvent.keyboard('{Tab}')
    })

    const { transform: card1Transform } = getComputedStyle(playedCrop1)
    const { transform: card2Transform } = getComputedStyle(playedCrop2)

    expect(card1Transform).toMatchInlineSnapshot(`""`)
    expect(card2Transform).toMatchInlineSnapshot(
      `"translateX(512px) translateY(359px) scale(1.25)"`
    )
    expect(playedCrop1).toHaveAttribute('aria-label', unselectedCardLabel)
    expect(playedCrop2).toHaveAttribute('aria-label', selectedCardLabel)
  })

  test('focus can be escaped', async () => {
    render(<StubField />)

    const [playedCrop1] = screen.getAllByLabelText(unselectedCardLabel)

    if (!playedCrop1) {
      throw new Error('Crop not found')
    }

    await userEvent.click(playedCrop1)

    await waitFor(async () => {
      await userEvent.keyboard('{Escape}')
    })

    const { transform: card1Transform } = getComputedStyle(playedCrop1)

    expect(card1Transform).toMatchInlineSnapshot(`""`)
    expect(document.activeElement).toBe(document.body)
  })
})
