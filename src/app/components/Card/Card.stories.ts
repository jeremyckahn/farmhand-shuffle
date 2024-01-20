import type { Meta, StoryObj } from '@storybook/react'

import { carrot, pumpkin, water } from '../../../game/cards'
import { CardSize } from '../../types'

import { Card } from './Card'

const meta = {
  title: 'Farmhand Shuffle/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const CropCard: Story = {
  args: {
    card: carrot,
  },
}

export const WaterCard: Story = {
  args: {
    card: water,
  },
}

export const SmallCard: Story = {
  args: {
    card: pumpkin,
    size: CardSize.SMALL,
  },
}

export const MediumCard: Story = {
  args: {
    card: pumpkin,
    size: CardSize.MEDIUM,
  },
}
export const LargeCard: Story = {
  args: {
    card: pumpkin,
    size: CardSize.LARGE,
  },
}
