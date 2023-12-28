import type { Meta, StoryObj } from '@storybook/react'

import { Game } from './Game'

const meta = {
  title: 'Farmhand Shuffle/Game',
  component: Game,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Game>

export default meta
type Story = StoryObj<typeof meta>

export const BaseGame: Story = {
  args: {},
}
