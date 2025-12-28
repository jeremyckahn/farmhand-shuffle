import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { DECK_SIZE } from '../../../game/config'
import { stubCarrot, stubShovel } from '../../../test-utils/stubs/cards'

import { CardQuantityControl } from './CardQuantityControl'

const meta = {
  title: 'Farmhand Shuffle/CardQuantityControl',
  component: CardQuantityControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'onChange' },
  },
} satisfies Meta<typeof CardQuantityControl>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    card: stubCarrot,
    quantity: 5,
    onChange: () => {},
  },
}

export const MinQuantity: Story = {
  args: {
    card: stubCarrot,
    quantity: 0,
    onChange: () => {},
  },
}

export const MaxQuantity: Story = {
  args: {
    card: stubCarrot,
    quantity: DECK_SIZE,
    onChange: () => {},
  },
}

export const ToolCard: Story = {
  args: {
    card: stubShovel,
    quantity: 2,
    onChange: () => {},
  },
}

export const Interactive = {
  render: () => {
    const [quantity, setQuantity] = useState(0)

    return (
      <CardQuantityControl
        card={stubCarrot}
        quantity={quantity}
        onChange={setQuantity}
      />
    )
  },
}
