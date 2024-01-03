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

const gameWithHandOf3 = updatePlayer(baseGame, baseGame.sessionOwnerPlayerId, {
  hand: [carrot.id, pumpkin.id, water.id],
})

const gameWithHandOf5 = updatePlayer(baseGame, baseGame.sessionOwnerPlayerId, {
  hand: [carrot.id, pumpkin.id, water.id, carrot.id, pumpkin.id],
})

const gameWithHandOf6 = updatePlayer(baseGame, baseGame.sessionOwnerPlayerId, {
  hand: [carrot.id, pumpkin.id, water.id, carrot.id, pumpkin.id, water.id],
})

export const HandOf3: Story = {
  args: {
    playerId: gameWithHandOf3.sessionOwnerPlayerId,
    game: gameWithHandOf3,
  },
}

export const HandOf5: Story = {
  args: {
    playerId: gameWithHandOf5.sessionOwnerPlayerId,
    game: gameWithHandOf5,
  },
}

export const HandOf6: Story = {
  args: {
    playerId: gameWithHandOf6.sessionOwnerPlayerId,
    game: gameWithHandOf6,
  },
}
