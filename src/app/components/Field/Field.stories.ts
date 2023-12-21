import type { Meta, StoryObj } from '@storybook/react'

import { stubGame } from '../../../test-utils/stubs/game'

import { Field } from './Field'

const meta = {
  title: 'Farmhand Shuffle/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

const game = stubGame()

export const SelfTable: Story = {
  args: {
    playerId: game.userPlayerId,
    game,
  },
}
