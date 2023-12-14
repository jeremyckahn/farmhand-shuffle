import type { Meta, StoryObj } from '@storybook/react'

import { carrot } from '../../../game/cards'

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

export const Crop: Story = {
  args: {
    card: carrot,
  },
}

export const PlayedCrop: Story = {
  args: {
    card: carrot,
    playedCrop: {
      id: carrot.id,
      waterCards: 1,
    },
  },
}
