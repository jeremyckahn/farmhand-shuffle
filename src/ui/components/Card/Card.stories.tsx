import type { Meta, StoryObj } from '@storybook/react'

import { carrot, pumpkin, water } from '../../../game/cards'
import { CardSize } from '../../types'

import { Card, CardFocusMode } from './Card'

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
    cardIdx: 0,
    playerId: '',
    isFlipped: false,
  },
}

export const PlayableCropCard: Story = {
  args: {
    card: pumpkin,
    cardIdx: 0,
    playerId: '',
    isFlipped: false,
    size: CardSize.MEDIUM,
    cardFocusMode: CardFocusMode.CROP_PLACEMENT,
  },
}

export const WaterCard: Story = {
  args: {
    card: water,
    cardIdx: 0,
    playerId: '',
    isFlipped: false,
  },
}

export const SmallCard: Story = {
  args: {
    card: pumpkin,
    cardIdx: 0,
    playerId: '',
    size: CardSize.SMALL,
    isFlipped: false,
  },
}

export const MediumCard: Story = {
  args: {
    card: pumpkin,
    cardIdx: 0,
    playerId: '',
    isFlipped: false,
    size: CardSize.MEDIUM,
  },
}

export const LargeCard: Story = {
  args: {
    card: pumpkin,
    cardIdx: 0,
    playerId: '',
    isFlipped: false,
    size: CardSize.LARGE,
  },
}
