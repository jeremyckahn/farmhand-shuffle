import Container, { ContainerProps } from '@mui/material/Container'
import useTheme from '@mui/material/styles/useTheme'
import { useEffect } from 'react'

import { GameEvent, GameState, IPlayerSeed } from '../../../game/types'
import { isSxArray } from '../../type-guards'
import { Table } from '../Table'
import { TurnControl } from '../TurnControl'

import { ActorContext } from './ActorContext'

export interface GameProps extends ContainerProps {
  playerSeeds: IPlayerSeed[]
  userPlayerId: string
}

const GameCore = ({
  playerSeeds,
  userPlayerId,
  sx = [],
  ...rest
}: GameProps) => {
  const theme = useTheme()
  const actorRef = ActorContext.useActorRef()
  const [state, game] = ActorContext.useSelector(
    ({ value, context: { game } }) => [value, game]
  )

  useEffect(() => {
    if (state === GameState.UNINITIALIZED) {
      actorRef.send({ type: GameEvent.INIT, playerSeeds, userPlayerId })
    }
  }, [state, playerSeeds, userPlayerId])

  return (
    <Container
      maxWidth={false}
      data-testid="game"
      sx={[
        { backgroundColor: theme.palette.grey['500'], py: 3, overflow: 'auto' },
        ...(isSxArray(sx) ? sx : [sx]),
      ]}
      {...rest}
    >
      <TurnControl />
      <Table sx={{ pt: 4 }} game={game} />
    </Container>
  )
}

export const Game = ({ ...rest }: GameProps) => {
  return (
    <ActorContext.Provider>
      <GameCore {...rest} />
    </ActorContext.Provider>
  )
}
