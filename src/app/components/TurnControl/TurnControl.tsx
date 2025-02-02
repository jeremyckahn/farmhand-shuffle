import Accordion from '@mui/material/Accordion'
import AccordionActions from '@mui/material/AccordionActions'
import AccordionSummary from '@mui/material/AccordionSummary'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { ReactNode } from 'react'

import { GameEvent, GameState, IGame } from '../../../game/types'
import { ActorContext } from '../Game/ActorContext'

export interface TurnControlProps {
  game: IGame
}

export const TurnControl = ({ game }: TurnControlProps) => {
  const actorRef = ActorContext.useActorRef()
  const state = ActorContext.useSelector(({ value }) => value)
  const stateString = typeof state === 'string' ? state : 'Unknown state'

  const handleCompleteSetup = () => {
    actorRef.send({ type: GameEvent.PROMPT_PLAYER_FOR_SETUP })
  }

  let control: ReactNode = null

  const currentPlayer =
    game.currentPlayerId && game.table.players[game.currentPlayerId]

  switch (state) {
    case GameState.WAITING_FOR_PLAYER_SETUP_ACTION: {
      if (currentPlayer && currentPlayer.field.crops.length > 0) {
        control = <Button onClick={handleCompleteSetup}>Complete setup</Button>
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
          Game state: {stateString}
        </Typography>
      </AccordionSummary>
      <AccordionActions sx={{ justifyContent: 'center' }}>
        {control}
      </AccordionActions>
    </Accordion>
  )
}
