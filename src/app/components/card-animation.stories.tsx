import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Box from '@mui/material/Box'

import { IGame } from '../../game/types'
import { lookup } from '../../game/services/Lookup'
import { drawCard } from '../../game/reducers/draw-card'
import { CardSize } from '../types'
import { stubGame } from '../../test-utils/stubs/game'

import { Deck, DeckProps } from './Deck'
import { Field } from './Field'
import { Hand } from './Hand'
import { DiscardPile } from './DiscardPile'

const TestHarness = ({ game: initialGame }: { game: IGame }) => {
  const [game, setGame] = useState(initialGame)
  const { sessionOwnerPlayerId: userPlayerId } = initialGame

  const opponentPlayerIds = lookup.getOpponentPlayerIds(initialGame)

  const handleClickTopCard: DeckProps['handleClickTopCard'] = () => {
    setGame(drawCard(game, userPlayerId))
  }

  const cardSize = CardSize.SMALL

  return (
    <Box>
      <Field game={game} playerId={userPlayerId} />
      {opponentPlayerIds.map(playerId => {
        return <Field key={playerId} game={game} playerId={playerId} />
      })}
      <Deck
        game={game}
        playerId={userPlayerId}
        handleClickTopCard={handleClickTopCard}
        cardSize={cardSize}
      />
      <Hand game={game} playerId={userPlayerId} cardSize={cardSize} />
      <DiscardPile game={game} playerId={userPlayerId} cardSize={cardSize} />
    </Box>
  )
}

const meta = {
  title: 'Farmhand Shuffle/Card Animation',
  component: TestHarness,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TestHarness>

export default meta

type Story = StoryObj<typeof meta>

const game = stubGame()

export const Primary: Story = {
  args: {
    game,
  },
}
