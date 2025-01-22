import { useEffect } from 'react'
import Container, { ContainerProps } from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import useTheme from '@mui/material/styles/useTheme'

import { GameEvent, GameState, IPlayerSeed } from '../../../game/types'
import { Table } from '../Table/Table'

import { isSxArray } from '../../type-guards'

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

  const stateString = typeof state === 'string' ? state : 'Unknown state'

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
      <Paper sx={{ width: 1, mb: 2 }}>
        <Typography variant="h1" fontSize={24} py={2} textAlign="center">
          Game state: {stateString}
        </Typography>
      </Paper>
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
