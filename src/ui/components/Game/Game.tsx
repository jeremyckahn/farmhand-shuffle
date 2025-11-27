import { KeyboardArrowDown } from '@mui/icons-material'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Fab from '@mui/material/Fab'
import useTheme from '@mui/material/styles/useTheme'
import Tooltip from '@mui/material/Tooltip'
import { funAnimalName } from 'fun-animal-names'

import { isSxArray } from '../../type-guards'
import { ui } from '../../img'
import { Table } from '../Table'
import { TurnControl } from '../TurnControl'

import { ActorContext } from './ActorContext'
import { ShellContext } from './ShellContext'
import { Snackbar } from './Snackbar'
import { GameProps } from './types'
import { useGame } from './useGame'

const GameCore = ({
  playerSeeds,
  userPlayerId,
  fullHeight = false,
  sx = [],
  ...rest
}: GameProps) => {
  const theme = useTheme()

  const {
    game,
    handleHandVisibilityToggle,
    handleClickPlayAgain,
    isHandDisabled,
    isInputBlocked,
    shellContextValue,
    showGameOver,
    showHand,
    snackbarProps,
    winner,
  } = useGame({ playerSeeds, userPlayerId }) as ReturnType<typeof useGame>

  return (
    <ShellContext.Provider value={shellContextValue}>
      <Container
        maxWidth={false}
        data-testid="game"
        sx={[
          {
            backgroundColor: '#ffba4d',
            backgroundImage: `url(${ui.brownDotBackground})`,
            backgroundSize: theme.spacing(10),
            imageRendering: 'pixelated',
            pt: 1,
            // NOTE: This prevents the hide/show Hand button from obscuring
            // Field cards.
            pb: 10,
            overflow: 'auto',
            ...(isInputBlocked && {
              '*': {
                pointerEvents: 'none',
              },
            }),
            height: fullHeight ? '100vh' : undefined,
          },
          ...(isSxArray(sx) ? sx : [sx]),
        ]}
        {...rest}
      >
        <TurnControl game={game} />
        <Table sx={{ pt: 4 }} game={game} />
        <Tooltip arrow title={showHand ? 'Hide Hand' : 'Show Hand'}>
          <Fab
            color="secondary"
            disabled={isInputBlocked || isHandDisabled}
            onClick={handleHandVisibilityToggle}
            sx={{
              position: 'fixed',
              bottom: theme.spacing(2),
              left: theme.spacing(2),
            }}
          >
            <KeyboardArrowDown
              sx={{
                transform: `rotate(${showHand ? 0 : 180}deg)`,
                transition: theme.transitions.create(['transform']),
              }}
            />
          </Fab>
        </Tooltip>
        <Dialog open={showGameOver}>
          <DialogTitle>Game Over</DialogTitle>
          <DialogContent>
            Winner:{' '}
            <strong>{winner ? funAnimalName(winner) : 'No one'}</strong>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClickPlayAgain}>Play again</Button>
          </DialogActions>
        </Dialog>
      </Container>
      <Snackbar {...snackbarProps} />
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
