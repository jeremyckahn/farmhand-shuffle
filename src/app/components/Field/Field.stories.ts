import type { Meta, StoryObj } from '@storybook/react'

import { stubGame } from '../../../test-utils/stubs/game'
import { updateField } from '../../../game/reducers/update-field'
import { carrot, pumpkin } from '../../../game/cards'
import { factory } from '../../../game/services/Factory'

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

let game = stubGame()

const selfPlayerId = game.sessionOwnerPlayerId
const opponentPlayerId = Object.keys(game.table.players)[1]

game = updateField(game, selfPlayerId, {
  crops: [
    { ...factory.buildPlayedCrop(carrot), waterCards: 1 },
    { ...factory.buildPlayedCrop(pumpkin), waterCards: 3 },
    { ...factory.buildPlayedCrop(pumpkin), waterCards: 12 },
  ],
})

game = updateField(game, opponentPlayerId, {
  crops: [
    { ...factory.buildPlayedCrop(carrot), waterCards: 1 },
    { ...factory.buildPlayedCrop(pumpkin), waterCards: 3 },
    { ...factory.buildPlayedCrop(pumpkin), waterCards: 12 },
  ],
})

export const SelfField: Story = {
  args: {
    playerId: game.sessionOwnerPlayerId,
    game: game,
  },
}

export const OpponentField: Story = {
  args: {
    playerId: opponentPlayerId,
    game: game,
  },
}
