import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'

import { ICard } from '../../../game/types'

import { DeckBuilder } from './DeckBuilder'

vi.mock('../../../game/config', () => ({
  DECK_SIZE: 5,
  MAX_INSTANCES_PER_CARD: 2,
}))

// NOTE: We cannot use stubs from `src/test-utils/stubs/cards.ts` here because
// that file imports `src/game/cards`, which we are mocking below. This would
// cause a circular dependency.
const { mockCarrot, mockPumpkin, mockWater, mockShovel, mockRain } = vi.hoisted(
  () => ({
    mockCarrot: {
      id: 'carrot',
      name: 'Carrot',
      type: 'CROP',
      waterToMature: 2,
    },
    mockPumpkin: {
      id: 'pumpkin',
      name: 'Pumpkin',
      type: 'CROP',
      waterToMature: 1,
    },
    mockWater: { id: 'water', name: 'Water', type: 'WATER' },
    mockShovel: { id: 'shovel', name: 'Shovel', type: 'TOOL' },
    mockRain: { id: 'rain', name: 'Rain', type: 'EVENT' },
  })
)

vi.mock('../../../game/cards', () => ({
  cropCards: {
    carrot: mockCarrot,
    pumpkin: mockPumpkin,
  },
  waterCards: {
    water: mockWater,
  },
  toolCards: {
    shovel: mockShovel,
  },
  eventCards: {
    rain: mockRain,
  },
}))

describe('DeckBuilder', () => {
  const onDone = vi.fn()

  beforeEach(() => {
    onDone.mockClear()
  })

  test('renders cards in sections', () => {
    render(<DeckBuilder onDone={onDone} />)

    expect(
      screen.getByRole('heading', { name: 'Crops', level: 5 })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Water', level: 5 })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Tools', level: 5 })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Events', level: 5 })
    ).toBeInTheDocument()

    // NOTE: Expected order: Crops (sorted by value/water), Water, Tools,
    // Events
    //
    // Pumpkin (1 water) < Carrot (2 water)
    const expectedOrder = ['Pumpkin', 'Carrot', 'Water', 'Shovel', 'Rain']

    const regex = new RegExp(expectedOrder.join('|'))
    // We filter out the headers by ensuring we are looking for card names which are likely rendered in specific elements or just check presence and order.
    // Given the previous test failure, we know card names are present.
    // The previous test failed because "Water" was found twice (Header + Card).
    // Here we can search for the card names. Since "Water" card name is identical to the header, we might get multiple elements.
    // `getAllByText` returns an array.

    const allWaterElements = screen.getAllByText('Water')
    expect(allWaterElements.length).toBeGreaterThanOrEqual(2) // Header + Card

    // To check order, we can check the order of all text nodes that match the expected order.
    // However, `getAllByText(regex)` might pick up the headers too.
    // Crops header comes before Pumpkin/Carrot.
    // Water header comes before Water card.
    // Tools header comes before Shovel.
    // Events header comes before Rain.

    // Let's refine the test to look for specific card elements if possible, or just accept that the text content appears in that order.
    // The `getAllByText(regex)` will return elements in document order.
    const allMatches = screen.getAllByText(regex)
    const textContent = allMatches.map(el => el.textContent)

    // Filter out headers if they are picked up. The headers are "Crops", "Water", "Tools", "Events".
    // "Crops" matches "Crop" if the regex was loose, but here expectedOrder doesn't have "Crops".
    // "Water" is in expectedOrder. So "Water" header will be picked up.
    // "Tools" is not.
    // "Events" is not.

    // So "Water" header will appear before "Water" card.
    // expectedOrder is ['Pumpkin', 'Carrot', 'Water', 'Shovel', 'Rain']
    // Actual text content found for regex /Pumpkin|Carrot|Water|Shovel|Rain/ will be:
    // Pumpkin, Carrot, Water (header), Water (card), Shovel, Rain.

    // Let's verify that.
    const expectedTextContent = [
      'Pumpkin',
      'Carrot',
      'Water',
      'Water',
      'Shovel',
      'Rain',
    ]
    expect(textContent).toEqual(expectedTextContent)
  })

  test('enforces max instances per card limit (except Water)', () => {
    render(<DeckBuilder onDone={onDone} />)

    // Add 2 Pumpkins (limit reached)
    const pumpkinAdd = screen.getAllByLabelText('increase quantity')[0]
    fireEvent.click(pumpkinAdd)
    fireEvent.click(pumpkinAdd)

    expect(pumpkinAdd).toBeDisabled()

    // Add 2 Water (limit not reached because Water is exception)
    const waterAdd = screen.getAllByLabelText('increase quantity')[2]
    fireEvent.click(waterAdd)
    fireEvent.click(waterAdd)

    expect(waterAdd).toBeEnabled()
  })

  test('updates total and enables/disables Done button', () => {
    render(<DeckBuilder onDone={onDone} />)

    const doneButton = screen.getByRole('button', { name: 'Done' })

    expect(doneButton).toBeDisabled()
    expect(screen.getByText('Total: 0 / 5')).toBeInTheDocument()

    // Add 1 Pumpkin
    const pumpkinAdd = screen.getAllByLabelText('increase quantity')[0]
    fireEvent.click(pumpkinAdd)

    expect(screen.getByText('Total: 1 / 5')).toBeInTheDocument()
    expect(doneButton).toBeDisabled()

    // Add 1 Carrot
    const carrotAdd = screen.getAllByLabelText('increase quantity')[1]
    fireEvent.click(carrotAdd)

    expect(screen.getByText('Total: 2 / 5')).toBeInTheDocument()
    expect(doneButton).toBeDisabled()

    // Add 3 Water
    const waterAdd = screen.getAllByLabelText('increase quantity')[2]
    fireEvent.click(waterAdd)
    fireEvent.click(waterAdd)
    fireEvent.click(waterAdd)

    expect(screen.getByText('Total: 5 / 5')).toBeInTheDocument()
    expect(doneButton).toBeEnabled()

    // Try to add more (should be disabled because DECK_SIZE reached)
    expect(pumpkinAdd).toBeDisabled()
    expect(carrotAdd).toBeDisabled()
    expect(waterAdd).toBeDisabled()

    // Remove 1 Pumpkin
    const pumpkinRemove = screen.getAllByLabelText('decrease quantity')[0]
    fireEvent.click(pumpkinRemove)

    expect(screen.getByText('Total: 4 / 5')).toBeInTheDocument()
    expect(doneButton).toBeDisabled()
    expect(pumpkinAdd).toBeEnabled()
  })

  test('requires at least one crop', () => {
    render(<DeckBuilder onDone={onDone} />)

    // Add 5 Water cards (Valid deck size, but no crops)
    const waterAdd = screen.getAllByLabelText('increase quantity')[2]
    for (let i = 0; i < 5; i++) {
      fireEvent.click(waterAdd)
    }

    const doneButton = screen.getByRole('button', { name: 'Done' })
    expect(doneButton).toBeDisabled()

    // Remove 1 Water and add 1 Pumpkin
    const waterRemove = screen.getAllByLabelText('decrease quantity')[2]
    fireEvent.click(waterRemove)

    const pumpkinAdd = screen.getAllByLabelText('increase quantity')[0]
    fireEvent.click(pumpkinAdd)

    expect(doneButton).toBeEnabled()
  })

  test('calls onDone with correct deck map', () => {
    render(<DeckBuilder onDone={onDone} />)

    // Add 2 Pumpkins
    const pumpkinAdd = screen.getAllByLabelText('increase quantity')[0]
    fireEvent.click(pumpkinAdd)
    fireEvent.click(pumpkinAdd)

    // Add 3 Water
    const waterAdd = screen.getAllByLabelText('increase quantity')[2]
    fireEvent.click(waterAdd)
    fireEvent.click(waterAdd)
    fireEvent.click(waterAdd)

    const doneButton = screen.getByRole('button', { name: 'Done' })
    fireEvent.click(doneButton)

    expect(onDone).toHaveBeenCalledTimes(1)

    const deckMap = onDone.mock.calls[0][0] as Map<ICard, number>

    expect(deckMap.get(mockPumpkin as ICard)).toBe(2)
    expect(deckMap.get(mockWater as ICard)).toBe(3)
    expect(deckMap.has(mockCarrot as ICard)).toBe(false)
  })
})
