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
    const { container } = render(<DeckBuilder onDone={onDone} />)

    // NOTE: Expected order: Crops (sorted by value/water), Water, Tools,
    // Events
    //
    // Pumpkin (1 water) < Carrot (2 water)
    const expectedOrder = ['Pumpkin', 'Carrot', 'Water', 'Shovel', 'Rain']

    const regex = new RegExp(expectedOrder.join('|'))
    const allMatches = screen.getAllByText(regex)
    const textContent = allMatches.map(el => el.textContent)

    const expectedTextContent = [
      'Pumpkin',
      'Carrot',
      'Water',
      'Water',
      'Shovel',
      'Rain',
    ]
    expect(textContent).toEqual(expectedTextContent)

    expect(container).toMatchSnapshot()
  })

  test('enforces max instances per card limit (except Water)', () => {
    render(<DeckBuilder onDone={onDone} />)

    // Add 2 Pumpkins (limit reached)
    const pumpkinAdd = screen.getAllByLabelText('increase quantity')[0]
    if (pumpkinAdd) {
      fireEvent.click(pumpkinAdd)
      fireEvent.click(pumpkinAdd)
      expect(pumpkinAdd).toBeDisabled()
    }

    // Add 2 Water (limit not reached because Water is exception)
    const waterAdd = screen.getAllByLabelText('increase quantity')[2]
    if (waterAdd) {
      fireEvent.click(waterAdd)
      fireEvent.click(waterAdd)
      expect(waterAdd).toBeEnabled()
    }
  })

  test('updates total and enables/disables Done button', () => {
    render(<DeckBuilder onDone={onDone} />)

    const doneButton = screen.getByRole('button', { name: 'Done' })

    expect(doneButton).toBeDisabled()
    expect(screen.getByText('Total: 0 / 5')).toBeInTheDocument()

    // Add 1 Pumpkin
    const pumpkinAdd = screen.getAllByLabelText('increase quantity')[0]
    if (pumpkinAdd) {
      fireEvent.click(pumpkinAdd)
    }

    expect(screen.getByText('Total: 1 / 5')).toBeInTheDocument()
    expect(doneButton).toBeDisabled()

    // Add 1 Carrot
    const carrotAdd = screen.getAllByLabelText('increase quantity')[1]
    if (carrotAdd) {
      fireEvent.click(carrotAdd)
    }

    expect(screen.getByText('Total: 2 / 5')).toBeInTheDocument()
    expect(doneButton).toBeDisabled()

    // Add 3 Water
    const waterAdd = screen.getAllByLabelText('increase quantity')[2]
    if (waterAdd) {
      fireEvent.click(waterAdd)
      fireEvent.click(waterAdd)
      fireEvent.click(waterAdd)
    }

    expect(screen.getByText('Total: 5 / 5')).toBeInTheDocument()
    expect(doneButton).toBeEnabled()

    // Try to add more (should be disabled because DECK_SIZE reached)
    expect(pumpkinAdd).toBeDisabled()
    expect(carrotAdd).toBeDisabled()
    expect(waterAdd).toBeDisabled()

    // Remove 1 Pumpkin
    const pumpkinRemove = screen.getAllByLabelText('decrease quantity')[0]
    if (pumpkinRemove) {
      fireEvent.click(pumpkinRemove)
    }

    expect(screen.getByText('Total: 4 / 5')).toBeInTheDocument()
    expect(doneButton).toBeDisabled()
    expect(pumpkinAdd).toBeEnabled()
  })

  test('requires at least one crop', () => {
    render(<DeckBuilder onDone={onDone} />)

    // Add 5 Water cards (Valid deck size, but no crops)
    const waterAdd = screen.getAllByLabelText('increase quantity')[2]
    if (waterAdd) {
      for (let i = 0; i < 5; i++) {
        fireEvent.click(waterAdd)
      }
    }

    const doneButton = screen.getByRole('button', { name: 'Done' })
    expect(doneButton).toBeDisabled()

    // Remove 1 Water and add 1 Pumpkin
    const waterRemove = screen.getAllByLabelText('decrease quantity')[2]
    if (waterRemove) {
      fireEvent.click(waterRemove)
    }

    const pumpkinAdd = screen.getAllByLabelText('increase quantity')[0]
    if (pumpkinAdd) {
      fireEvent.click(pumpkinAdd)
    }

    expect(doneButton).toBeEnabled()
  })

  test('calls onDone with correct deck map', () => {
    render(<DeckBuilder onDone={onDone} />)

    // Add 2 Pumpkins
    const pumpkinAdd = screen.getAllByLabelText('increase quantity')[0]
    if (pumpkinAdd) {
      fireEvent.click(pumpkinAdd)
      fireEvent.click(pumpkinAdd)
    }

    // Add 3 Water
    const waterAdd = screen.getAllByLabelText('increase quantity')[2]
    if (waterAdd) {
      fireEvent.click(waterAdd)
      fireEvent.click(waterAdd)
      fireEvent.click(waterAdd)
    }

    const doneButton = screen.getByRole('button', { name: 'Done' })
    fireEvent.click(doneButton)

    expect(onDone).toHaveBeenCalledTimes(1)

    const call = onDone.mock.calls[0]
    if (!call) throw new Error('onDone not called')
    const deckMap = call[0] as Map<ICard, number>

    expect(deckMap.get(mockPumpkin as ICard)).toBe(2)
    expect(deckMap.get(mockWater as ICard)).toBe(3)
    expect(deckMap.has(mockCarrot as ICard)).toBe(false)
  })
})
