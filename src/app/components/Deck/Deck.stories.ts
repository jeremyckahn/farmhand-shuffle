import type { Meta, StoryObj } from '@storybook/react'

import { stubGame } from '../../../test-utils/stubs/game'

import { Deck } from './Deck'

const meta = {
  title: 'Farmhand Shuffle/Deck',
  component: Deck,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Deck>

export default meta
type Story = StoryObj<typeof meta>

const game = stubGame()

export const SelfDeck: Story = {
  args: {
    playerId: game.sessionOwnerPlayerId,
    game,
  },
}
