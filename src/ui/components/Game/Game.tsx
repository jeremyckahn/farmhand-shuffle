import Container, { ContainerProps } from '@mui/material/Container'
import useTheme from '@mui/material/styles/useTheme'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { GameEvent, GameState, IPlayerSeed } from '../../../game/types'
import { isSxArray } from '../../type-guards'
import { Table } from '../Table'
import { TurnControl } from '../TurnControl'

import { ActorContext } from './ActorContext'
import { InputBlockContext, InputBlockContextProps } from './InputBlockContext'

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

  const [isInputBlocked, setIsInputBlocked] = useState(false)

  useEffect(() => {
    if (state === GameState.UNINITIALIZED) {
      actorRef.send({ type: GameEvent.INIT, playerSeeds, userPlayerId })
    }
  }, [state, playerSeeds, userPlayerId, actorRef])

  const blockingOperation: InputBlockContextProps['blockingOperation'] =
    useCallback(
      async fn => {
        try {
          setIsInputBlocked(true)
          await fn()
        } catch (_e) {
          // Empty
        } finally {
          setIsInputBlocked(false)
        }
      },
      [setIsInputBlocked]
    )

  const inputBlockContextValue: InputBlockContextProps = useMemo(
    () => ({ blockingOperation }),
    [blockingOperation]
  )

  return (
    <InputBlockContext.Provider value={inputBlockContextValue}>
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
      </Container>
    </InputBlockContext.Provider>
  )
}

export const Game = ({ ...rest }: GameProps) => {
  return (
    <ActorContext.Provider>
      <GameCore {...rest} />
    </ActorContext.Provider>
  )
}
