import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'

import { DECK_SIZE } from '../../../game/config'
import { stubCarrot } from '../../../test-utils/stubs/cards'

import { CardQuantityControl } from './CardQuantityControl'

describe('CardQuantityControl', () => {
  const onChange = vi.fn()

  beforeEach(() => {
    onChange.mockClear()
  })

  test('renders card name and quantity', () => {
    render(
      <CardQuantityControl card={stubCarrot} quantity={5} onChange={onChange} />
    )

    expect(screen.getByText(stubCarrot.name)).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  test('calls onChange with decremented value when minus clicked', () => {
    render(
      <CardQuantityControl card={stubCarrot} quantity={5} onChange={onChange} />
    )

    fireEvent.click(screen.getByLabelText('decrease quantity'))

    expect(onChange).toHaveBeenCalledTimes(1)

    const call = onChange.mock.calls[0]

    if (!call) throw new Error('onChange not called')

    const updateFn = call[0] as (prev: number) => number

    expect(updateFn(5)).toBe(4)
  })

  test('calls onChange with incremented value when plus clicked', () => {
    render(
      <CardQuantityControl card={stubCarrot} quantity={5} onChange={onChange} />
    )

    fireEvent.click(screen.getByLabelText('increase quantity'))

    expect(onChange).toHaveBeenCalledTimes(1)

    const call = onChange.mock.calls[0]

    if (!call) throw new Error('onChange not called')

    const updateFn = call[0] as (prev: number) => number

    expect(updateFn(5)).toBe(6)
  })

  test('disables minus button at quantity 0', () => {
    render(
      <CardQuantityControl card={stubCarrot} quantity={0} onChange={onChange} />
    )

    const button = screen.getByLabelText('decrease quantity')
    expect(button).toBeDisabled()
    fireEvent.click(button)
    expect(onChange).not.toHaveBeenCalled()
  })

  test('disables plus button at max quantity', () => {
    render(
      <CardQuantityControl
        card={stubCarrot}
        quantity={DECK_SIZE}
        onChange={onChange}
      />
    )

    const button = screen.getByLabelText('increase quantity')
    expect(button).toBeDisabled()
    fireEvent.click(button)
    expect(onChange).not.toHaveBeenCalled()
  })
})
