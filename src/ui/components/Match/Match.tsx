import Box from '@mui/material/Box/index.js'
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
        // MUI Container applies its own left/right padding by default,
        // which would inset the inner scrollable Box's edges (and thus its
        // scrollbar) away from this Container's true edges. That padding
        // is applied to the inner Box's content instead, below, so the
        // scrollbar itself renders flush with this Container's edge.
        disableGutters
        data-testid="match"
        sx={[
          {
            backgroundColor: '#ffba4d',
            backgroundImage: `url(${ui.brownDotBackground})`,
            backgroundSize: theme.spacing(10),
            imageRendering: 'pixelated',
            // Sets the base text color for everything inside (e.g.
            // TurnControl's funds display), which otherwise has none of
            // its own and just inherits this via normal CSS cascade. A
            // host embedding Match with its own background (see the
            // backgroundColor/backgroundImage overrides above) can
            // override this the same way, through the same consumer-
            // facing `sx` prop, without any component in between needing
            // an embedding-specific prop of its own.
            color: theme.palette.common.white,
            display: 'flex',
            flexDirection: 'column',
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
            // "positioned relative to this container" behavior.
            //
            // That containing-block redirection has a second consequence
            // though: a `fixed` descendant of a scrolling containing block
            // scrolls along with that block's content instead of staying
            // pinned (also per spec - a scrolling containing block moves
            // its own fixed descendants same as it would absolute ones).
            // So this element itself must NOT be the scrolling element -
            // scrolling is delegated to the plain (non-containing-block)
            // inner Box below, which the Hand and hide/show button skip
            // past on their way up to this Container, leaving them
            // unaffected by its scroll.
            overflow: 'hidden',
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
        <Box
          sx={{
            flex: 1,
            minHeight: 0,
            overflowY: 'auto',
            // Never horizontally scrollable: Table/Field content is sized
            // to fit whatever width this container actually has (see
            // useContainerWidth), so any horizontal overflow here would be
            // a layout bug, not a legitimate need to scroll sideways.
            overflowX: 'hidden',
            pt: 1,
            px: 2,
            // NOTE: This prevents the hide/show Hand button from obscuring
            // Field cards.
            pb: 10,
          }}
        >
          <TurnControl match={match} />
          {renderStatusBarContent?.()}
          <Table sx={{ pt: 4 }} match={match} />
        </Box>
        <Tooltip arrow title={showHand ? 'Hide Hand' : 'Show Hand'}>
          <Fab
            color="secondary"
            disabled={isInputBlocked || isHandDisabled}
            onClick={handleHandVisibilityToggle}
            sx={{
              position: 'fixed',
              // Matches the host Farmhand app's own bottom nav row
              // pixel-for-pixel, so this button lines up with it at
              // every screen size instead of just some. That row's own
              // vertical offset isn't just its container's `bottom`
              // (1rem normally / 0.5rem at <=400px) - each button in it
              // also carries its own margin-bottom (0.4375rem normally,
              // 0.21875rem at <=400px, from a breakpoint-specific rule
              // on the host's side), which stacks with the container's
              // own offset. Measured directly against the host's
              // rendered layout rather than derived, since the second
              // number isn't otherwise discoverable from this package
              // alone. left matches bottom exactly rather than being
              // independently chosen, so this button sits the same
              // distance from each of its two nearest edges.
              bottom: '1.4375rem',
              left: '1.4375rem',
              '@media (max-width: 400px)': {
                bottom: '0.71875rem',
                left: '0.71875rem',
              },
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
