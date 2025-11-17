import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { stubGame } from '../../../test-utils/stubs/game'

import { Deck, defaultDeckCardSize, defaultDeckThicknessPx } from './Deck'

const meta = {
  title: 'Farmhand Shuffle/Deck',
  component: Deck,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    cardSize: {
      control: { type: 'number' },
      description: 'The card size of the deck',
    },
    deckThicknessPx: {
      control: { type: 'number' },
      description: 'The thickness of the deck in pixels',
    },
  },
} satisfies Meta<typeof Deck>

export default meta
type Story = StoryObj<typeof meta>

const game = stubGame()
const opponentPlayerId = Object.keys(game.table.players)[1]

export const SelfDeck: Story = {
  args: {
    playerId: game.sessionOwnerPlayerId,
    game,
    cardSize: defaultDeckCardSize,
    deckThicknessPx: defaultDeckThicknessPx,
  },
  decorators: [
    (Story, ctx) => {
      const [isTopCardSelected, setIsTopCardSelected] = useState(false)

      const handleClickTopCard = () => {
        setIsTopCardSelected(!isTopCardSelected)
      }

      return (
        <Story
          args={{
            ...ctx.args,
            handleClickTopCard,
            isTopCardSelected,
          }}
        />
      )
    },
  ],
}

export const OpponentDeck: Story = {
  args: {
    playerId: opponentPlayerId,
    game,
    cardSize: defaultDeckCardSize,
    deckThicknessPx: defaultDeckThicknessPx,
  },
}
