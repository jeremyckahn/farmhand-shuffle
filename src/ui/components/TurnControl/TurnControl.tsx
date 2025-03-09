import Accordion from '@mui/material/Accordion'
import AccordionActions from '@mui/material/AccordionActions'
import AccordionSummary from '@mui/material/AccordionSummary'
import Button from '@mui/material/Button'
import useTheme from '@mui/material/styles/useTheme'
import Typography from '@mui/material/Typography'
import { funAnimalName } from 'fun-animal-names'
import { ReactNode, useContext } from 'react'

import { GameEvent, GameState, IGame } from '../../../game/types'
import { assertCurrentPlayer } from '../../../game/types/guards'
import { useGameRules } from '../../hooks/useGameRules'
import { ActorContext } from '../Game/ActorContext'
import { ShellContext } from '../Game/ShellContext'

export interface TurnControlProps {
  game: IGame
}

export const TurnControl = ({ game }: TurnControlProps) => {
  const theme = useTheme()
  const actorRef = ActorContext.useActorRef()
  const { setIsHandInViewport } = useContext(ShellContext)
  const {
    gameState,
    game: { currentPlayerId },
  } = useGameRules()

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

  const currentPlayer = currentPlayerId && game.table.players[currentPlayerId]

  let stateInfo = ''

  switch (gameState) {
    case GameState.WAITING_FOR_PLAYER_SETUP_ACTION: {
      stateInfo = 'Set up your Field'

      if (currentPlayer && currentPlayer.field.crops.length > 0) {
        control = <Button onClick={handleCompleteSetup}>Complete setup</Button>
      }

      break
    }

    case GameState.WAITING_FOR_PLAYER_TURN_ACTION: {
      stateInfo = 'Your turn'

      if (currentPlayer && currentPlayer.id === game.sessionOwnerPlayerId) {
        control = <Button onClick={handleEndTurn}>End turn</Button>
      }

      break
    }

    case GameState.PLAYER_WATERING_CROP: {
      stateInfo = 'Select a crop to water'

      if (currentPlayer && currentPlayer.id === game.sessionOwnerPlayerId) {
        control = (
          <Button onClick={handleCancelWatering} color="warning">
            Cancel watering
          </Button>
        )
      }

      break
    }

    case GameState.PERFORMING_BOT_TURN_ACTION: {
      assertCurrentPlayer(currentPlayerId)

      stateInfo = `${funAnimalName(currentPlayerId)}'s turn`

      break
    }

    case GameState.PERFORMING_BOT_SETUP_ACTION: {
      assertCurrentPlayer(currentPlayerId)

      stateInfo = `${funAnimalName(currentPlayerId)} is setting their field up`

      break
    }

    case GameState.PERFORMING_BOT_CROP_WATERING: {
      assertCurrentPlayer(currentPlayerId)

      stateInfo = `${funAnimalName(currentPlayerId)} is watering crops}`

      break
    }

    default:
  }

  return (
    <Accordion
      sx={{ width: 1, mb: 2, borderRadius: `${theme.shape.borderRadius}px` }}
      expanded={control !== null}
    >
      <AccordionSummary
        sx={{
          '&:hover:not(.Mui-disabled)': {
            cursor: 'default',
          },
          '& .MuiAccordionSummary-content': { justifyContent: 'center' },
        }}
      >
        <Typography
          variant="h6"
          component="h1"
          textAlign="center"
          fontWeight="normal"
        >
          {stateInfo}
        </Typography>
      </AccordionSummary>
      <AccordionActions sx={{ justifyContent: 'center' }}>
        {control}
      </AccordionActions>
    </Accordion>
  )
}
