import type { Meta, StoryObj } from '@storybook/react'

import { carrot, water } from '../../../game/cards'

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

export const PlayedCropCard: Story = {
  args: {
    card: carrot,
    playedCrop: {
      id: carrot.id,
      waterCards: 1,
    },
  },
}

export const WaterCard: Story = {
  args: {
    card: water,
  },
}
