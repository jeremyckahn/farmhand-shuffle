import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Factory } from '../../../game/services/Factory'
import { updateField } from '../../../game/reducers/update-field'
import { stubGame } from '../../../test-utils/stubs/game'
import { carrot, pumpkin } from '../../../game/cards'
import * as cards from '../../../game/cards'
import { isCardId } from '../../../game/types/guards'
import { playedCropWrapperClassName } from '../PlayedCrop'
import { cardClassName } from '../Card/CardTemplate'

import { Field, FieldProps, rotationTransform } from '.'

let gameStub = stubGame()
const opponentPlayerId = Object.keys(gameStub.table.players)[1]

const fieldCrop1 = carrot
const fieldCrop2 = pumpkin

const cropsStub = [
  { ...Factory.buildPlayedCrop(fieldCrop1), waterCards: 1 },
  { ...Factory.buildPlayedCrop(fieldCrop2), waterCards: 3 },
]

gameStub = updateField(gameStub, gameStub.sessionOwnerPlayerId, {
  crops: cropsStub,
})

gameStub = updateField(gameStub, opponentPlayerId, {
  crops: cropsStub,
})

const StubField = (overrides: Partial<FieldProps>) => {
  return (
    <Field
      game={gameStub}
      playerId={gameStub.sessionOwnerPlayerId}
      {...overrides}
    />
  )
}

describe('Field', () => {
  test('renders crop cards for self', () => {
    render(<StubField />)

    for (const crop of cropsStub) {
      if (!isCardId(crop.id)) {
        throw new Error()
      }

      const card = screen
        .getByText(cards[crop.id].name)
        .closest(`.${cardClassName}`)

      const { transform } = getComputedStyle(card!)
      expect(transform).toMatchSnapshot()
    }
  })

  test('renders crop cards for opponent upside-down', async () => {
    render(<StubField playerId={opponentPlayerId} />)

    for (const crop of cropsStub) {
      if (!isCardId(crop.id)) {
        throw new Error()
      }

      const card = screen
        .getByText(cards[crop.id].name)
        .closest(`.${playedCropWrapperClassName}`)

      const { transform } = getComputedStyle(card!)
      expect(transform).toMatchSnapshot()
      expect(transform).toContain(rotationTransform)
    }
  })

  test('clicking a card selects it', async () => {
    render(<StubField />)

    const playedCrop1 = screen
      .getByText(fieldCrop1.name)
      .closest(`.${cardClassName}`)

    const playedCrop1Wrapper = screen
      .getByText(fieldCrop1.name)
      .closest(`.${playedCropWrapperClassName}`)

    await userEvent.click(playedCrop1!)

    const { transform: playedCrop1Transform } = getComputedStyle(
      playedCrop1Wrapper!
    )

    expect(playedCrop1Transform).toMatchSnapshot()

    for (const crop of cropsStub.slice(1)) {
      if (!isCardId(crop.id)) {
        throw new Error()
      }

      const cardWrapper = screen
        .getByText(cards[crop.id].name)
        .closest(`.${playedCropWrapperClassName}`)

      const { transform } = getComputedStyle(cardWrapper!)
      expect(transform).toMatchSnapshot()
    }
  })

  test("clicking an opponent's card selects it", async () => {
    render(<StubField playerId={opponentPlayerId} />)

    const playedCrop1 = screen
      .getByText(fieldCrop1.name)
      .closest(`.${cardClassName}`)

    const playedCrop1Wrapper = screen
      .getByText(fieldCrop1.name)
      .closest(`.${playedCropWrapperClassName}`)

    await userEvent.click(playedCrop1!)

    const { transform } = getComputedStyle(playedCrop1Wrapper!)

    expect(transform).toMatchSnapshot()
    expect(transform).not.toContain(rotationTransform)
  })

  test('losing focus resets the card selection', async () => {
    render(<StubField />)

    const playedCrop1 = screen
      .getByText(fieldCrop1.name)
      .closest(`.${cardClassName}`)

    const playedCrop1Wrapper = screen
      .getByText(fieldCrop1.name)
      .closest(`.${playedCropWrapperClassName}`)

    await userEvent.click(playedCrop1!)

    await waitFor(() => {
      ;(document.activeElement as HTMLElement).blur()
    })

    const { transform } = getComputedStyle(playedCrop1Wrapper!)
    expect(transform).toMatchSnapshot()
  })

  test('supports tab navigation', async () => {
    render(<StubField />)

    const card1 = screen.getByText(fieldCrop1.name).closest(`.${cardClassName}`)
    const cardWrapper1 = screen
      .getByText(fieldCrop1.name)
      .closest(`.${playedCropWrapperClassName}`)

    const cardWrapper2 = screen
      .getByText(fieldCrop2.name)
      .closest(`.${playedCropWrapperClassName}`)

    await userEvent.click(card1!)

    await waitFor(() => {
      userEvent.keyboard('{Tab}')
    })

    const { transform: card1Transform } = getComputedStyle(cardWrapper1!)
    const { transform: card2Transform } = getComputedStyle(cardWrapper2!)

    expect(card1Transform).toMatchSnapshot()
    expect(card2Transform).toMatchSnapshot()
  })

  test('focus can be escaped', async () => {
    render(<StubField />)

    const card1 = screen.getByText(fieldCrop1.name).closest(`.${cardClassName}`)
    const cardWrapper1 = screen
      .getByText(fieldCrop1.name)
      .closest(`.${playedCropWrapperClassName}`)

    await userEvent.click(card1!)

    await waitFor(() => {
      userEvent.keyboard('{Escape}')
    })

    const { transform: card1Transform } = getComputedStyle(cardWrapper1!)
    expect(card1Transform).toMatchSnapshot()
    expect(document.activeElement).toBe(document.body)
  })
})
