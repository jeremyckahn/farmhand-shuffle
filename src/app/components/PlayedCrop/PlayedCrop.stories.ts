import type { Meta, StoryObj } from '@storybook/react'

import { carrot } from '../../../game/cards'

import { PlayedCrop } from './PlayedCrop'

const meta = {
  title: 'Farmhand Shuffle/PlayedCrop',
  component: PlayedCrop,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PlayedCrop>

export default meta
type Story = StoryObj<typeof meta>

export const PlayedCropCard: Story = {
  args: {
    cropCardProps: {
      card: carrot,
      playedCrop: {
        id: carrot.id,
        waterCards: 1,
      },
    },
    isInBackground: false,
  },
}
