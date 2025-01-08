import { useEffect } from 'react'
import Box, { BoxProps } from '@mui/material/Box'

import { GameEvent, GameState, IPlayerSeed } from '../../../game/types'
import { Table } from '../Table/Table'

import { ActorContext } from './ActorContext'

export interface GameProps extends BoxProps {
  playerSeeds: IPlayerSeed[]
  userPlayerId: string
}

const GameCore = ({ playerSeeds, userPlayerId, ...rest }: GameProps) => {
  const actorRef = ActorContext.useActorRef()
  const [value, game] = ActorContext.useSelector(
    ({ value, context: { game } }) => [value, game]
  )

  useEffect(() => {
    if (value === GameState.UNINITIALIZED) {
      actorRef.send({ type: GameEvent.INIT, playerSeeds, userPlayerId })
    }
  }, [value, playerSeeds, userPlayerId])

  return (
    <Box {...rest}>
      <Table game={game} />
    </Box>
  )
}

export const Game = ({ ...rest }: GameProps) => {
  return (
    <ActorContext.Provider>
      <GameCore {...rest} />
    </ActorContext.Provider>
  )
}
