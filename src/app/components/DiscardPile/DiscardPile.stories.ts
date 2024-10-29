import type { Meta, StoryObj } from '@storybook/react'

import { stubGame } from '../../../test-utils/stubs/game'
import { addToDiscardPile } from '../../../game/reducers/add-to-discard-pile'
import { IGame } from '../../../game/types'

import {
  DiscardPile,
  defaultDiscardPileCardSize,
  defaultDiscardPileThicknessPx,
} from './DiscardPile'

const meta = {
  title: 'Farmhand Shuffle/Discard Pile',
  component: DiscardPile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    cardSize: {
      control: { type: 'number' },
      description: 'The card size of the discard pile',
    },
    discardPileThicknessPx: {
      control: { type: 'number' },
      description: 'The thickness of the discard pile in pixels',
    },
  },
} satisfies Meta<typeof DiscardPile>

export default meta
type Story = StoryObj<typeof meta>

const game = stubGame()
const [selfPlayerId, opponentPlayerId] = Object.keys(game.table.players)

export const SelfDiscardPile: Story = {
  args: {
    playerId: selfPlayerId,
    cardSize: defaultDiscardPileCardSize,
    discardPileThicknessPx: defaultDiscardPileThicknessPx,
    game: (() => {
      return ['carrot', 'pumpkin', 'pumpkin', 'water'].reduce(
        (acc: IGame, cardId) => addToDiscardPile(acc, selfPlayerId, cardId),
        game
      )
    })(),
  },
}

export const OpponentDiscardPile: Story = {
  args: {
    playerId: opponentPlayerId,
    cardSize: defaultDiscardPileCardSize,
    discardPileThicknessPx: defaultDiscardPileThicknessPx,
    game: (() => {
      return ['carrot', 'pumpkin', 'pumpkin', 'water'].reduce(
        (acc: IGame, cardId) => addToDiscardPile(acc, opponentPlayerId, cardId),
        game
      )
    })(),
  },
}
