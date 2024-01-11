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

import { CARD_HEIGHT, CARD_WIDTH } from '../../config/dimensions'

import { Hand } from './Hand'

const meta = {
  title: 'Farmhand Shuffle/Hand',
  component: Hand,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story, { args }) => {
      let { game } = args
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
        <Box
          sx={{
            minHeight: `calc(${CARD_HEIGHT} * 1.35)`,
            minWidth: `calc(${CARD_WIDTH} * 3)`,
            display: 'flex',
            position: 'relative',
          }}
        >
          <Story args={{ ...args, game, sx: { m: 'auto', mt: 0 } }} />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Tooltip title="Add a random card">
                <Fab color="primary" onClick={handleClickAdd}>
                  <AddIcon />
                </Fab>
              </Tooltip>
              <Tooltip title="Remove the last card">
                <Fab
                  color="secondary"
                  sx={{ mt: 1 }}
                  onClick={handleClickRemove}
                >
                  <RemoveIcon />
                </Fab>
              </Tooltip>
            </Box>
            <Typography align="center" variant="subtitle2" sx={{ mt: 2 }}>
              Cards: {game.table.players[game.sessionOwnerPlayerId].hand.length}
            </Typography>
          </Box>
        </Box>
      )
    },
  ],
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
