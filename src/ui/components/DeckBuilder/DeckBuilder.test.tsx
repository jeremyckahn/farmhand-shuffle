import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'

import { ICard } from '../../../game/types'

import { DeckBuilder } from './DeckBuilder'

// Mock configuration
vi.mock('../../../game/config', () => ({
  DECK_SIZE: 2,
}))

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
  carrot: mockCarrot,
  pumpkin: mockPumpkin,
  water: mockWater,
  shovel: mockShovel,
  rain: mockRain,
}))

describe('DeckBuilder', () => {
  const onDone = vi.fn()

  beforeEach(() => {
    onDone.mockClear()
  })

  test('renders cards in correct order', () => {
    render(<DeckBuilder onDone={onDone} />)

    // Expected order: Crops (sorted by value/water), Water, Tools, Events
    // Pumpkin (1 water) < Carrot (2 water)
    const expectedOrder = ['Pumpkin', 'Carrot', 'Water', 'Shovel', 'Rain']

    const regex = new RegExp(expectedOrder.join('|'))
    const cardNameElements = screen.getAllByText(regex)

    const relevantNames = cardNameElements.map(el => el.textContent)

    expect(relevantNames).toEqual(expectedOrder)
  })

  test('updates total and enables/disables Done button', () => {
    render(<DeckBuilder onDone={onDone} />)

    const doneButton = screen.getByRole('button', { name: 'Done' })
    expect(doneButton).toBeDisabled()
    expect(screen.getByText('Total: 0 / 2')).toBeInTheDocument()

    // Add 1 Pumpkin
    const pumpkinAdd = screen.getAllByLabelText('increase quantity')[0] // Pumpkin is first
    fireEvent.click(pumpkinAdd)
    expect(screen.getByText('Total: 1 / 2')).toBeInTheDocument()
    expect(doneButton).toBeDisabled()

    // Add 1 Carrot
    const carrotAdd = screen.getAllByLabelText('increase quantity')[1] // Carrot is second
    fireEvent.click(carrotAdd)
    expect(screen.getByText('Total: 2 / 2')).toBeInTheDocument()
    expect(doneButton).toBeEnabled()

    // Try to add more (should be disabled)
    expect(pumpkinAdd).toBeDisabled()
    expect(carrotAdd).toBeDisabled()

    // Remove 1 Pumpkin
    const pumpkinRemove = screen.getAllByLabelText('decrease quantity')[0]
    fireEvent.click(pumpkinRemove)
    expect(screen.getByText('Total: 1 / 2')).toBeInTheDocument()
    expect(doneButton).toBeDisabled()
    expect(pumpkinAdd).toBeEnabled()
  })

  test('calls onDone with correct deck map', () => {
    render(<DeckBuilder onDone={onDone} />)

    // Add 2 Pumpkins
    const pumpkinAdd = screen.getAllByLabelText('increase quantity')[0]
    fireEvent.click(pumpkinAdd)
    fireEvent.click(pumpkinAdd)

    const doneButton = screen.getByRole('button', { name: 'Done' })
    fireEvent.click(doneButton)

    expect(onDone).toHaveBeenCalledTimes(1)
    const deckMap = onDone.mock.calls[0][0] as Map<ICard, number>
    // @ts-expect-error - mockPumpkin is a test mock, simplified
    expect(deckMap.get(mockPumpkin)).toBe(2)
    // @ts-expect-error - mockCarrot is a test mock, simplified
    expect(deckMap.has(mockCarrot)).toBe(false)
  })
})
