import type { Meta, StoryObj } from '@storybook/react'

import { carrot } from '../../../game/cards'

import { Card } from './Card'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Farmhand Shuffle/Card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
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
