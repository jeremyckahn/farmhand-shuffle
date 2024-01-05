import { useState } from 'react'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import type { Meta, StoryObj } from '@storybook/react'

import { RandomNumber } from '../../../services/RandomNumber'
import { carrot, pumpkin, water } from '../../../game/cards/index'
import { updatePlayer } from '../../../game/reducers/update-player/index'
import { lookup } from '../../../game/services/Lookup/index'

import { stubGame } from '../../../test-utils/stubs/game'

import { Hand, HandProps } from './Hand'

const HandWithVariableCards = ({ game, ...rest }: HandProps) => {
  const [hand, setHand] = useState(
    lookup.getPlayer(game, game.sessionOwnerPlayerId).hand
  )

  const handleClickAdd = () => {
    setHand([
      ...hand,
      RandomNumber.chooseElement([carrot.id, water.id, pumpkin.id]),
    ])
  }

  const handleClickRemove = () => {
    setHand(hand.slice(0, hand.length - 1))
  }

  game = updatePlayer(game, game.sessionOwnerPlayerId, { hand })

  return (
    <>
      <Hand game={game} {...rest} />
      <Box
        sx={{
          position: 'absolute',
          bottom: '0.5rem',
          display: 'flex',
          transform: 'translateX(-50%)',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Tooltip title="Add a random card">
            <Fab color="primary" onClick={handleClickAdd}>
              <AddIcon />
            </Fab>
          </Tooltip>
          <Tooltip title="Remove the last card">
            <Fab color="secondary" sx={{ ml: 2 }} onClick={handleClickRemove}>
              <RemoveIcon />
            </Fab>
          </Tooltip>
        </Box>
        <Typography align="center" variant="subtitle2" sx={{ mt: '0.5rem' }}>
          Cards: {game.table.players[game.sessionOwnerPlayerId].hand.length}
        </Typography>
      </Box>
    </>
  )
}

const meta = {
  title: 'Farmhand Shuffle/Hand',
  component: HandWithVariableCards,
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
