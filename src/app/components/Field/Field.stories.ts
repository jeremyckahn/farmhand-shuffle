import type { Meta, StoryObj } from '@storybook/react'

import { stubGame } from '../../../test-utils/stubs/game'
import { updateField } from '../../../game/reducers/update-field'
import { carrot, pumpkin } from '../../../game/cards'
import { Factory } from '../../../game/services/Factory'

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

const baseGame = stubGame()

const gameWithFieldWithThreePlayedCrops = updateField(
  baseGame,
  baseGame.sessionOwnerPlayerId,
  {
    crops: [
      { ...Factory.buildPlayedCrop(carrot), waterCards: 1 },
      { ...Factory.buildPlayedCrop(pumpkin), waterCards: 3 },
      { ...Factory.buildPlayedCrop(pumpkin), waterCards: 12 },
    ],
  }
)

export const SelfField: Story = {
  args: {
    playerId: gameWithFieldWithThreePlayedCrops.sessionOwnerPlayerId,
    game: gameWithFieldWithThreePlayedCrops,
  },
}
