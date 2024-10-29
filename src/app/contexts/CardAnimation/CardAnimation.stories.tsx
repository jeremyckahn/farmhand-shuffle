import type { Meta, StoryObj } from '@storybook/react'

import Box from '@mui/material/Box'

import { lookup } from '../../../game/services/Lookup'
import { IGame } from '../../../game/types'
import { stubGame } from '../../../test-utils/stubs/game'
import { DiscardPile } from '../../components/DiscardPile'
import { Field } from '../../components/Field'
import { Hand } from '../../components/Hand'
import { Deck } from '../../components/Deck/Deck'

import { CardAnimationProvider } from './CardAnimation'

const CardAnimationTestHarness = ({ game }: { game: IGame }) => {
  const { sessionOwnerPlayerId: userPlayerId } = game

  const opponentPlayerIds = lookup.getOpponentPlayerIds(game)

  return (
    <CardAnimationProvider game={game}>
      <Box>
        <Field game={game} playerId={userPlayerId} />
        {opponentPlayerIds.map(playerId => {
          return <Field key={playerId} game={game} playerId={playerId} />
        })}
        <Deck game={game} playerId={userPlayerId} />
        <Hand game={game} playerId={userPlayerId} />
        <DiscardPile game={game} playerId={userPlayerId} />
      </Box>
    </CardAnimationProvider>
  )
}

const meta = {
  title: 'Farmhand Shuffle/CardAnimation',
  component: CardAnimationTestHarness,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CardAnimationTestHarness>

export default meta

type Story = StoryObj<typeof meta>

const game = stubGame()

export const Primary: Story = {
  args: {
    game,
  },
}
