import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Tooltip from '@mui/material/Tooltip'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { carrot, instantiate, pumpkin, water } from '../../../game/cards'
import { updatePlayer } from '../../../game/reducers/update-player'
import { lookup } from '../../../game/services/Lookup'
import { randomNumber } from '../../../services/RandomNumber'
import { stubGame } from '../../../test-utils/stubs/game'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { StubShellContext } from '../../test-utils/StubShellContext'
import { CardSize } from '../../types'

import {
  stubCarrot,
  stubPumpkin,
  stubWater,
} from '../../../test-utils/stubs/cards'

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
        const randomCard = randomNumber.chooseElement([
          stubCarrot,
          stubWater,
          stubPumpkin,
        ])

        if (randomCard) {
          setHand([...hand, randomCard])
        }
      }

      const handleClickRemove = () => {
        setHand(hand.slice(0, hand.length - 1))
      }

      game = updatePlayer(game, game.sessionOwnerPlayerId, { hand })

      return (
        <StubShellContext>
          <Box
            sx={{
              minHeight: `calc(${
                CARD_DIMENSIONS[CardSize.LARGE].height
              } * 1.35)`,
              minWidth: `calc(${CARD_DIMENSIONS[CardSize.LARGE].width} * 3)`,
              display: 'flex',
              position: 'relative',
            }}
          >
            <Story args={{ ...args, game, sx: { m: 'auto', mt: 0 } }} />
            <Tooltip
              title={`Cards: ${
                game.table.players[game.sessionOwnerPlayerId].hand.length
              }`}
              open
            >
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
                  <Tooltip title="Add a random card" placement="left">
                    <Fab color="primary" onClick={handleClickAdd}>
                      <AddIcon />
                    </Fab>
                  </Tooltip>
                  <Tooltip title="Remove the last card" placement="left">
                    <Fab
                      color="secondary"
                      sx={{ mt: 1.5 }}
                      onClick={handleClickRemove}
                    >
                      <RemoveIcon />
                    </Fab>
                  </Tooltip>
                </Box>
              </Box>
            </Tooltip>
          </Box>
        </StubShellContext>
      )
    },
  ],
} satisfies Meta<typeof Hand>

export default meta
type Story = StoryObj<typeof meta>

const baseGame = stubGame()

const gameWithHandOf3 = updatePlayer(baseGame, baseGame.sessionOwnerPlayerId, {
  hand: [stubCarrot, stubPumpkin, stubWater],
})

const gameWithHandOf5 = updatePlayer(baseGame, baseGame.sessionOwnerPlayerId, {
  hand: [
    instantiate(carrot),
    instantiate(pumpkin),
    instantiate(water),
    instantiate(carrot),
    instantiate(pumpkin),
  ],
})

export const HandOf3: Story = {
  args: {
    playerId: gameWithHandOf3.sessionOwnerPlayerId,
    game: gameWithHandOf3,
    cardSize: CardSize.LARGE,
  },
}

export const HandOf5: Story = {
  args: {
    playerId: gameWithHandOf5.sessionOwnerPlayerId,
    game: gameWithHandOf5,
    cardSize: CardSize.LARGE,
  },
}
