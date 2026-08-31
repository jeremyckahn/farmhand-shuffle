import Button from '@mui/material/Button/index.js'
import Container from '@mui/material/Container/index.js'
import Dialog from '@mui/material/Dialog/index.js'
import DialogActions from '@mui/material/DialogActions/index.js'
import DialogContent from '@mui/material/DialogContent/index.js'
import DialogTitle from '@mui/material/DialogTitle/index.js'
import Fab from '@mui/material/Fab/index.js'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import useTheme from '@mui/material/styles/useTheme'
import Tooltip from '@mui/material/Tooltip/index.js'
import { funAnimalName } from 'fun-animal-names'

import { isSxArray } from '../../type-guards'
import { ui } from '../../img'
import { lightTheme } from '../../theme'
import { KeyboardArrowDown } from '../icons/index.js'
import { Table } from '../Table'
import { TurnControl } from '../TurnControl'

import { ActorContext } from './ActorContext'
import { ShellContext } from './ShellContext'
import { MatchProps } from './types'
import { useMatch } from './useMatch'

const MatchCore = ({
  playerSeeds,
  userPlayerId,
  fullHeight = false,
  sx = [],
  onMatchEnd,
  onCheckpoint,
  renderStatusBarContent,
  renderGameOverContent,
  hideDefaultGameOverActions = false,
  initialMatch,
  ...rest
}: MatchProps) => {
  const theme = useTheme()

  const {
    match,
    handleHandVisibilityToggle,
    handleClickPlayAgain,
    isHandDisabled,
    isInputBlocked,
    shellContextValue,
    showGameOver,
    showHand,
  } = useMatch({
    playerSeeds,
    userPlayerId,
    onMatchEnd,
    onCheckpoint,
    initialMatch,
  })

  const { winner } = match

  return (
    <ShellContext.Provider value={shellContextValue}>
      <Container
        maxWidth={false}
        data-testid="match"
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
            // Table positions the Hand with `position: fixed`, intending
            // it to stay pinned to the bottom of this container's visible
            // area while Field/Table content scrolls past above it - but
            // per spec, a `fixed` element's containing block is always the
            // viewport, not any ancestor, regardless of that ancestor's
            // own position/overflow. In a host app that renders Match
            // alongside other UI (e.g. a sidebar), that centers the Hand
            // against the whole browser window instead of this container,
            // visibly off-center. Any transform on an ancestor establishes
            // a new containing block for fixed descendants (a spec'd CSS
            // mechanism, not a hack) - this restores the intended
            // "positioned relative to this container" behavior without
            // giving up the "stays put while this container's own content
            // scrolls" behavior fixed positioning provides.
            transform: 'translateZ(0)',
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
        <TurnControl match={match} />
        {renderStatusBarContent?.()}
        <Table sx={{ pt: 4 }} match={match} />
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
            Winner: <strong>{winner ? funAnimalName(winner) : 'No one'}</strong>
            {renderGameOverContent?.(winner)}
          </DialogContent>
          <DialogActions>
            {!hideDefaultGameOverActions && (
              <Button onClick={handleClickPlayAgain}>Play again</Button>
            )}
          </DialogActions>
        </Dialog>
      </Container>
    </ShellContext.Provider>
  )
}

export const Match = ({ ...rest }: MatchProps) => {
  return (
    // Match is meant to be embedded in host apps with their own theme
    // (see the farmhand integration), which would otherwise leak into
    // Match's own colors - MUI ThemeProvider nests (a child provider
    // overrides its ancestor's theme only for its own subtree), so this
    // keeps Match visually self-contained regardless of what theme, if
    // any, a consumer has active above it. Nested inside ActorContext.Provider
    // (not around it) so MatchCore's own useTheme() call picks this up.
    <ActorContext.Provider>
      <ThemeProvider theme={lightTheme}>
        <MatchCore {...rest} />
      </ThemeProvider>
    </ActorContext.Provider>
  )
}
