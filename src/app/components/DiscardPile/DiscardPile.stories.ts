import type { Meta, StoryObj } from '@storybook/react'

import { stubGame } from '../../../test-utils/stubs/game'
import { addToDiscardPile } from '../../../game/reducers/add-to-discard-pile'
import { IGame } from '../../../game/types'

import { DiscardPile } from './DiscardPile'

const meta = {
  title: 'Farmhand Shuffle/Discard Pile',
  component: DiscardPile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DiscardPile>

export default meta
type Story = StoryObj<typeof meta>

const game = stubGame()

export const SelfDiscardPile: Story = {
  args: {
    playerId: game.sessionOwnerPlayerId,
    game: (() => {
      const [player1Id] = Object.keys(game.table.players)

      return ['carrot', 'pumpkin', 'pumpkin', 'water'].reduce(
        (acc: IGame, cardId) => addToDiscardPile(acc, player1Id, cardId),
        game
      )
    })(),
  },
}
