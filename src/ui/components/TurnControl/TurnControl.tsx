import Accordion from '@mui/material/Accordion'
import AccordionActions from '@mui/material/AccordionActions'
import AccordionSummary from '@mui/material/AccordionSummary'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { ReactNode, useContext } from 'react'

import { GameEvent, GameState, IGame } from '../../../game/types'
import { ActorContext } from '../Game/ActorContext'
import { useGameRules } from '../../hooks/useGameRules'
import { ShellContext } from '../Game/ShellContext'

export interface TurnControlProps {
  game: IGame
}

export const TurnControl = ({ game }: TurnControlProps) => {
  const actorRef = ActorContext.useActorRef()
  const { setIsHandInViewport } = useContext(ShellContext)
  const { gameState } = useGameRules()

  const handleCompleteSetup = () => {
    actorRef.send({ type: GameEvent.PROMPT_BOT_FOR_SETUP_ACTION })
  }

  const handleEndTurn = () => {
    actorRef.send({ type: GameEvent.START_TURN })
  }

  const handleCancelWatering = () => {
    actorRef.send({ type: GameEvent.OPERATION_ABORTED })
    setIsHandInViewport(true)
  }

  let control: ReactNode = null

  const currentPlayer =
    game.currentPlayerId && game.table.players[game.currentPlayerId]

  switch (gameState) {
    case GameState.WAITING_FOR_PLAYER_SETUP_ACTION: {
      if (currentPlayer && currentPlayer.field.crops.length > 0) {
        control = <Button onClick={handleCompleteSetup}>Complete setup</Button>
      }
      break
    }

    case GameState.WAITING_FOR_PLAYER_TURN_ACTION: {
      if (currentPlayer && currentPlayer.id === game.sessionOwnerPlayerId) {
        control = <Button onClick={handleEndTurn}>End turn</Button>
      }
      break
    }

    case GameState.PLAYER_WATERING_CROP: {
      if (currentPlayer && currentPlayer.id === game.sessionOwnerPlayerId) {
        control = (
          <Button onClick={handleCancelWatering} color="warning">
            Cancel watering
          </Button>
        )
      }
      break
    }

    default:
  }

  return (
    <Accordion sx={{ width: 1, mb: 2 }} expanded={control !== null}>
      <AccordionSummary
        sx={{
          '&:hover:not(.Mui-disabled)': {
            cursor: 'default',
          },
          '& .MuiAccordionSummary-content': { justifyContent: 'center' },
        }}
      >
        <Typography variant="h1" fontSize={24} textAlign="center">
          Game state: {gameState}
        </Typography>
      </AccordionSummary>
      <AccordionActions sx={{ justifyContent: 'center' }}>
        {control}
      </AccordionActions>
    </Accordion>
  )
}
