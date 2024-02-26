import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Factory } from '../../../game/services/Factory'
import { updateField } from '../../../game/reducers/update-field'
import { stubGame } from '../../../test-utils/stubs/game'
import { carrot, pumpkin } from '../../../game/cards'

import {
  Field,
  FieldProps,
  rotationTransform,
  selectedCardLabel,
  unselectedCardLabel,
} from '.'

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

    const playedCrops = screen.getAllByLabelText(unselectedCardLabel)

    for (const playedCrop of playedCrops) {
      const { transform } = getComputedStyle(playedCrop)
      expect(transform).toMatchSnapshot()
    }
  })

  test('renders crop cards for opponent upside-down', async () => {
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
    await userEvent.click(playedCrop1)

    await waitFor(() => {
      userEvent.keyboard('{Tab}')
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

    await userEvent.click(playedCrop1)

    await waitFor(() => {
      userEvent.keyboard('{Escape}')
    })

    const { transform: card1Transform } = getComputedStyle(playedCrop1)
    expect(card1Transform).toMatchInlineSnapshot(`""`)
    expect(document.activeElement).toBe(document.body)
  })
})
