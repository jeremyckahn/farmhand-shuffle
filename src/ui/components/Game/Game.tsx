import { KeyboardArrowDown } from '@mui/icons-material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import { funAnimalName } from 'fun-animal-names'
import Container from '@mui/material/Container'
import Fab from '@mui/material/Fab'
import useTheme from '@mui/material/styles/useTheme'
import Tooltip from '@mui/material/Tooltip'

import { isSxArray } from '../../type-guards'
import { Table } from '../Table'
import { TurnControl } from '../TurnControl'

import { ActorContext } from './ActorContext'
import { ShellContext } from './ShellContext'
import { Snackbar } from './Snackbar'
import { useGame } from './useGame'
import { GameProps } from './types'

const GameCore = ({
  playerSeeds,
  userPlayerId,
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
  } = useGame({ playerSeeds, userPlayerId })

  return (
    <ShellContext.Provider value={shellContextValue}>
      <Container
        maxWidth={false}
        data-testid="game"
        sx={[
          {
            backgroundColor: theme.palette.grey['500'],
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
            Winner: <strong>{funAnimalName(winner ?? '')}</strong>
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
