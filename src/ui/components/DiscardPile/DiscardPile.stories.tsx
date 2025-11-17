import type { Meta, StoryObj } from '@storybook/react-vite'

import { carrot, instantiate, pumpkin, water } from '../../../game/cards'
import { addToDiscardPile } from '../../../game/reducers/add-to-discard-pile'
import { IGame } from '../../../game/types'
import { stubGame } from '../../../test-utils/stubs/game'

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
      return [
        instantiate(carrot),
        instantiate(pumpkin),
        instantiate(pumpkin),
        instantiate(water),
      ].reduce(
        (acc: IGame, cardInstance) =>
          addToDiscardPile(acc, selfPlayerId, cardInstance),
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
      return [
        instantiate(carrot),
        instantiate(pumpkin),
        instantiate(pumpkin),
        instantiate(water),
      ].reduce(
        (acc: IGame, cardInstance) =>
          addToDiscardPile(acc, opponentPlayerId, cardInstance),
        game
      )
    })(),
  },
}
