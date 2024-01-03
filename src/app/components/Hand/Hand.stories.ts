import type { Meta, StoryObj } from '@storybook/react'

import { carrot, pumpkin, water } from '../../../game/cards/index'
import { updatePlayer } from '../../../game/reducers/update-player/index'

import { stubGame } from '../../../test-utils/stubs/game'

import { Hand } from './Hand'

const meta = {
  title: 'Farmhand Shuffle/Hand',
  component: Hand,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Hand>

export default meta
type Story = StoryObj<typeof meta>

const baseGame = stubGame()

const game = updatePlayer(baseGame, baseGame.sessionOwnerPlayerId, {
  hand: [carrot.id, pumpkin.id, water.id],
})

export const SelfHand: Story = {
  args: {
    playerId: game.sessionOwnerPlayerId,
    game,
  },
}
