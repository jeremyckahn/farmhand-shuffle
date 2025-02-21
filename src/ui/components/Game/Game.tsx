import { KeyboardArrowDown } from '@mui/icons-material'
import Container, { ContainerProps } from '@mui/material/Container'
import Fab from '@mui/material/Fab'
import useTheme from '@mui/material/styles/useTheme'
import Tooltip from '@mui/material/Tooltip'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { GameEvent, GameState, IPlayerSeed } from '../../../game/types'
import { isSxArray } from '../../type-guards'
import { Table } from '../Table'
import { TurnControl } from '../TurnControl'

import { ActorContext } from './ActorContext'
import { ShellContext, ShellContextProps } from './ShellContext'

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
  const [isHandInViewport, setIsHandInViewport] = useState(true)

  useEffect(() => {
    if (import.meta.env.DEV) {
      actorRef.subscribe(snapshot => {
        if (typeof snapshot.value === 'string') {
          console.debug(`State: ${snapshot.value}`)
        }
      })
    }
  }, [actorRef])

  const [isBlockingOperationExecuting, setIsBlockingOperationExecuting] =
    useState(false)

  useEffect(() => {
    if (state === GameState.UNINITIALIZED) {
      actorRef.send({ type: GameEvent.INIT, playerSeeds, userPlayerId })
    }
  }, [state, playerSeeds, userPlayerId, actorRef])

  const blockingOperation: ShellContextProps['blockingOperation'] = useCallback(
    async fn => {
      try {
        setIsBlockingOperationExecuting(true)
        await fn()
      } catch (_e) {
        // Empty
      } finally {
        setIsBlockingOperationExecuting(false)
      }
    },
    [setIsBlockingOperationExecuting]
  )

  const shellContextValue: ShellContextProps = useMemo(
    () => ({ blockingOperation, isHandInViewport, setIsHandInViewport }),
    [blockingOperation, isHandInViewport, setIsHandInViewport]
  )

  const isSessionOwnersTurn = game.sessionOwnerPlayerId === game.currentPlayerId
  const isInputBlocked = isBlockingOperationExecuting || !isSessionOwnersTurn

  const handleHandVisibilityToggle = () => {
    setIsHandInViewport(prev => !prev)
  }

  return (
    <ShellContext.Provider value={shellContextValue}>
      <Container
        maxWidth={false}
        data-testid="game"
        sx={[
          {
            backgroundColor: theme.palette.grey['500'],
            py: 3,
            overflow: 'auto',
            ...(isInputBlocked && {
              '*': {
                pointerEvents: 'none',
              },
            }),
          },
          ...(isSxArray(sx) ? sx : [sx]),
        ]}
        {...rest}
      >
        <TurnControl game={game} />
        <Table sx={{ pt: 4 }} game={game} />
        <Tooltip arrow title={isHandInViewport ? 'Hide Hand' : 'Show Hand'}>
          <Fab
            color="secondary"
            disabled={isInputBlocked}
            onClick={handleHandVisibilityToggle}
            sx={{
              position: 'fixed',
              bottom: theme.spacing(2),
              left: theme.spacing(2),
            }}
          >
            <KeyboardArrowDown
              sx={{
                transform: `rotate(${isHandInViewport ? 0 : 180}deg)`,
                transition: theme.transitions.create(['transform']),
              }}
            />
          </Fab>
        </Tooltip>
      </Container>
    </ShellContext.Provider>
  )
}

export const Game = ({ ...rest }: GameProps) => {
  return (
    <ActorContext.Provider>
      <GameCore {...rest} />
    </ActorContext.Provider>
  )
}
