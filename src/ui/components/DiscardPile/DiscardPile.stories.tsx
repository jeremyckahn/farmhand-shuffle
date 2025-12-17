import type { Meta, StoryObj } from '@storybook/react-vite'

import { carrot, instantiate, pumpkin, water } from '../../../game/cards'
import { addToDiscardPile } from '../../../game/reducers/add-to-discard-pile'
import { IMatch } from '../../../game/types'
import { stubMatch } from '../../../test-utils/stubs/match'

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

const match = stubMatch()
const [selfPlayerId, opponentPlayerId] = Object.keys(match.table.players)

if (!selfPlayerId || !opponentPlayerId) {
  throw new Error('Players not found')
}

export const SelfDiscardPile: Story = {
  args: {
    playerId: selfPlayerId,
    cardSize: defaultDiscardPileCardSize,
    discardPileThicknessPx: defaultDiscardPileThicknessPx,
    match: (() => {
      return [
        instantiate(carrot),
        instantiate(pumpkin),
        instantiate(pumpkin),
        instantiate(water),
      ].reduce(
        (acc: IMatch, cardInstance) =>
          addToDiscardPile(acc, selfPlayerId, cardInstance),
        match
      )
    })(),
  },
}

export const OpponentDiscardPile: Story = {
  args: {
    playerId: opponentPlayerId,
    cardSize: defaultDiscardPileCardSize,
    discardPileThicknessPx: defaultDiscardPileThicknessPx,
    match: (() => {
      return [
        instantiate(carrot),
        instantiate(pumpkin),
        instantiate(pumpkin),
        instantiate(water),
      ].reduce(
        (acc: IMatch, cardInstance) =>
          addToDiscardPile(acc, opponentPlayerId, cardInstance),
        match
      )
    })(),
  },
}
