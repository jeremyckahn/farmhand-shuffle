import {
  ChevronLeft,
  ChevronRight,
  KeyboardArrowDown,
} from '@mui/icons-material'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Fab from '@mui/material/Fab'
import Fade from '@mui/material/Fade'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import useTheme from '@mui/material/styles/useTheme'
import Tooltip from '@mui/material/Tooltip/index.js'
import { funAnimalName } from 'fun-animal-names'
import { PointerEvent } from 'react'

import { isSxArray } from '../../type-guards'
import { NotificationProvider } from '../../context/NotificationContext'
import {
  genericOpponentPlayerLabel,
  genericSelfPlayerLabel,
  getHandToggleOffset,
  handToggleBottomVar,
  handToggleLeftVar,
} from '../constants'
import { ui } from '../../img'
import { lightTheme } from '../../theme'
import { cardClassName } from '../Card/CardCore'
import { selectedCardLabel } from '../Field/Field'
import { playedCardClassName } from '../PlayedCard'
import { Table } from '../Table'
import { TurnControl } from '../TurnControl'

import { ActorContext } from './ActorContext'
import { ShellContext } from './ShellContext'
import { MatchProps } from './types'
import { useMatch } from './useMatch'

enum Direction {
  NEXT = 1,
  PREVIOUS = -1,
}

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
  useGenericPlayerLabels = false,
  ...rest
}: MatchProps) => {
  const theme = useTheme()

  const {
    match,
    handleHandVisibilityToggle,
    handleClickPlayAgain,
    isHandDisabled,
    isInputBlocked,
    isSelectingFieldPosition,
    shellContextValue,
    showGameOver,
    showHand,
  } = useMatch({
    playerSeeds,
    userPlayerId,
    onMatchEnd,
    onCheckpoint,
    initialMatch,
    useGenericPlayerLabels,
  })

  const { winner } = match
  const {
    selectedHandCardIdx,
    isNarrowViewport,
    isHandCardSelected,
    isFieldCardSelected,
    handContainerRef,
    fieldContainerRef,
  } = shellContextValue
  const isCardFocused = isHandCardSelected || isFieldCardSelected
  // NOTE: The Fabs stay mounted (see isNarrowViewport below) so Fade can
  // animate them out, rather than this condition unmounting them outright.
  const showCardNavFabs = isCardFocused && !isSelectingFieldPosition

  // NOTE: Shared by both branches of handleCardNav below -- wraps `currentIdx`
  // by `direction` around `cards.length` and focuses the resulting card,
  // exactly like Tab already does, so all of the existing focus-driven
  // positioning/centering logic in Hand.tsx and Field.tsx applies unchanged.
  const focusAdjacentCard = (
    cards: HTMLElement[],
    currentIdx: number,
    direction: Direction
  ) => {
    if (cards.length === 0) {
      return
    }

    const nextIdx = (currentIdx + direction + cards.length) % cards.length

    cards[nextIdx]?.focus()
  }

  // NOTE: On mobile, the focused Hand/Field card can be hard to move away
  // from by touch alone (its neighbors are mostly hidden behind it) -- these
  // buttons step focus to the next/previous card in whichever collection
  // (Hand or the player's own Field) currently has a card focused. This
  // deliberately reads the current selection from React state
  // (selectedHandCardIdx/selectedFieldCardIdx) rather than
  // document.activeElement -- clicking the Fab itself can shift DOM focus
  // to the Fab before this handler runs, which would make an
  // activeElement-based lookup see the wrong (or no) card.
  const handleCardNav = (direction: Direction) => {
    if (isHandCardSelected) {
      const cards = handContainerRef.current
        ? [
            ...handContainerRef.current.querySelectorAll<HTMLElement>(
              `.${cardClassName}`
            ),
          ]
        : []

      focusAdjacentCard(cards, selectedHandCardIdx, direction)

      return
    }

    if (isFieldCardSelected) {
      const cards = fieldContainerRef.current
        ? [
            ...fieldContainerRef.current.querySelectorAll<HTMLElement>(
              `.${playedCardClassName}`
            ),
          ]
        : []

      // NOTE: selectedFieldCardIdx is a field slot index, which can be
      // sparse (played cards don't have to fill every slot), so its value
      // doesn't map directly to a position in `cards` (which only
      // contains played cards). Find the currently-selected card's actual
      // position among them via its aria-label instead -- that reflects
      // Field's own React state, so (unlike document.activeElement) it's
      // unaffected by the Fab momentarily taking DOM focus.
      const currentIdx = cards.findIndex(
        card => card.getAttribute('aria-label') === selectedCardLabel
      )

      if (currentIdx === -1) {
        return
      }

      focusAdjacentCard(cards, currentIdx, direction)
    }
  }

  // NOTE: A real (non-keyboard) click on a button focuses it by default,
  // which would blur the currently-focused card -- Hand.tsx and Field.tsx
  // both reset their selection on blur, so without this the tap would
  // clear the very selection handleCardNav above is trying to move.
  // preventDefault on pointerdown (covers touch and mouse) stops that
  // default focus shift, leaving the card focused throughout the click.
  const handleCardNavFabPointerDown = (event: PointerEvent) => {
    event.preventDefault()
  }

  return (
    <ShellContext.Provider value={shellContextValue}>
      <Container
        maxWidth={false}
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
            // The hide/show Hand button and the narrow-viewport card-nav
            // Fabs below are `position: fixed`, intending to stay pinned
            // within this container's visible area - but per spec, a
            // `fixed` element's containing block is always the viewport,
            // not any ancestor, regardless of that ancestor's own
            // position/overflow. In a host app that renders Match alongside
            // other UI (e.g. a sidebar), that centers them against the
            // whole browser window instead of this container, visibly
            // off-center. Any transform on an ancestor establishes a new
            // containing block for fixed descendants (a spec'd CSS
            // mechanism, not a hack) - this restores the intended
            // "positioned relative to this container" behavior.
            overflow: 'hidden',
            // NOTE: Card glows (crop watering/harvest indicators) and
            // placeholder outlines paint outside their own boxes -- a
            // drop-shadow with a 24px blur reaches well past a card that sits
            // near this container's edge, and overflow: hidden would cut it
            // off in a hard vertical line (most visible on narrow screens,
            // where the Field's outermost cards are only a few px from the
            // edge). overflow: clip with a clip margin still contains
            // anything that strays far outside, but lets that paint spill
            // past the edge and fade out naturally; the host's own bounds
            // (the window, or Farmhand's Stage) become the real clip.
            // Browsers without overflow-clip-margin keep the hidden
            // behavior above.
            '@supports (overflow-clip-margin: 1px)': {
              overflow: 'clip',
              overflowClipMargin: theme.spacing(6),
            },
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
        <TurnControl
          match={match}
          useGenericPlayerLabels={useGenericPlayerLabels}
        />
        {renderStatusBarContent?.()}
        <Table sx={{ pt: 4 }} match={match} />
        {
          // NOTE: On narrow viewports, the card-navigation Fabs replace the
          // always-visible hide/show control below -- with those Fabs and
          // Table.tsx's mobile-specific hand positioning already in play
          // there, a separate hide/show control is one more affordance than
          // the mobile layout needs.
          isNarrowViewport ? (
            <>
              <Fade in={showCardNavFabs} unmountOnExit>
                <Fab
                  color="secondary"
                  aria-label="Previous card"
                  onPointerDown={handleCardNavFabPointerDown}
                  onClick={() => handleCardNav(Direction.PREVIOUS)}
                  sx={{
                    position: 'fixed',
                    top: '50%',
                    left: theme.spacing(2),
                    transform: 'translateY(-50%)',
                  }}
                >
                  <ChevronLeft />
                </Fab>
              </Fade>
              <Fade in={showCardNavFabs} unmountOnExit>
                <Fab
                  color="secondary"
                  aria-label="Next card"
                  onPointerDown={handleCardNavFabPointerDown}
                  onClick={() => handleCardNav(Direction.NEXT)}
                  sx={{
                    position: 'fixed',
                    top: '50%',
                    right: theme.spacing(2),
                    transform: 'translateY(-50%)',
                  }}
                >
                  <ChevronRight />
                </Fab>
              </Fade>
            </>
          ) : (
            <Tooltip arrow title={showHand ? 'Hide Hand' : 'Show Hand'}>
              <Fab
                color="secondary"
                disabled={isInputBlocked || isHandDisabled}
                onClick={handleHandVisibilityToggle}
                sx={{
                  position: 'fixed',
                  bottom: getHandToggleOffset(
                    handToggleBottomVar,
                    theme.spacing(2)
                  ),
                  left: getHandToggleOffset(
                    handToggleLeftVar,
                    theme.spacing(2)
                  ),
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
          )
        }
        <Dialog open={showGameOver}>
          <DialogTitle>Game Over</DialogTitle>
          <DialogContent>
            Winner:{' '}
            <strong>
              {winner
                ? useGenericPlayerLabels
                  ? winner === match.sessionOwnerPlayerId
                    ? genericSelfPlayerLabel
                    : genericOpponentPlayerLabel
                  : funAnimalName(winner)
                : 'No one'}
            </strong>
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
    //
    // NotificationProvider is needed for the same reason, for a different
    // symptom: useSnackbar (used internally by Table/TurnControl to show
    // bot-turn notifications - a crop harvested, a card drawn, etc.) reads
    // it via useNotification(), whose context default throws if no
    // NotificationProvider ancestor exists at all. The standalone app's
    // own App.tsx happens to provide one, which masked this - a host app
    // embedding just Match, with no reason to know it needs to supply an
    // unrelated context this component never mentions in its own props,
    // hits that throw the moment any bot action tries to notify.
    <ActorContext.Provider>
      <ThemeProvider theme={lightTheme}>
        <NotificationProvider>
          <MatchCore {...rest} />
        </NotificationProvider>
      </ThemeProvider>
    </ActorContext.Provider>
  )
}
