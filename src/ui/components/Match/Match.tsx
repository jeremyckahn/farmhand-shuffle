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
import useTheme from '@mui/material/styles/useTheme'
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery'
import Tooltip from '@mui/material/Tooltip'
import { funAnimalName } from 'fun-animal-names'
import { PointerEvent } from 'react'

import { lookup } from '../../../game/services/Lookup'
import { isSxArray } from '../../type-guards'
import { ui } from '../../img'
import { Table } from '../Table'
import { TurnControl } from '../TurnControl'
import { deselectedHandIdx } from '../constants'

import { ActorContext } from './ActorContext'
import { ShellContext } from './ShellContext'
import { MatchProps } from './types'
import { useMatch } from './useMatch'

const MatchCore = ({
  playerSeeds,
  userPlayerId,
  fullHeight = false,
  sx = [],
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
  } = useMatch({ playerSeeds, userPlayerId })

  const { winner } = match
  const { selectedHandCardIdx, selectedFieldCardIdx } = shellContextValue
  const isNarrowViewport = useMediaQuery(theme.breakpoints.down('md'))
  const isCardFocused =
    selectedHandCardIdx !== deselectedHandIdx ||
    selectedFieldCardIdx !== deselectedHandIdx
  // NOTE: The Fabs stay mounted (see isNarrowViewport below) so Fade can
  // animate them out, rather than this condition unmounting them outright.
  const showCardNavFabs = isCardFocused && !isSelectingFieldPosition

  // NOTE: On mobile, the focused Hand/Field card can be hard to move away
  // from by touch alone (its neighbors are mostly hidden behind it) -- these
  // buttons step focus to the next/previous focusable card in whichever
  // collection (Hand or the player's own Field) currently has a card
  // focused, by calling .focus() on the target card exactly like Tab
  // already does, so all of the existing focus-driven positioning/
  // centering logic in Hand.tsx and Field.tsx applies unchanged. This
  // deliberately reads the current selection from React state
  // (selectedHandCardIdx/selectedFieldCardIdx) rather than
  // document.activeElement -- clicking the Fab itself can shift DOM focus
  // to the Fab before this handler runs, which would make an
  // activeElement-based lookup see the wrong (or no) card.
  const handleCardNav = (direction: 1 | -1) => {
    if (selectedHandCardIdx !== deselectedHandIdx) {
      const player = lookup.getPlayer(match, match.sessionOwnerPlayerId)
      const handCount = player.hand.length

      if (handCount === 0) {
        return
      }

      const nextIdx = (selectedHandCardIdx + direction + handCount) % handCount
      const handContainer = document.querySelector(
        `[data-testid="hand_${match.sessionOwnerPlayerId}"]`
      )
      const cards = handContainer
        ? [...handContainer.querySelectorAll<HTMLElement>('.Card')]
        : []

      cards[nextIdx]?.focus()

      return
    }

    if (selectedFieldCardIdx !== deselectedHandIdx) {
      const fieldContainer = document.querySelector(
        `[data-testid="field_${match.sessionOwnerPlayerId}"]`
      )
      const cards = fieldContainer
        ? [...fieldContainer.querySelectorAll<HTMLElement>('.PlayedCard')]
        : []

      if (cards.length === 0) {
        return
      }

      // NOTE: selectedFieldCardIdx is a field slot index, which can be
      // sparse (played cards don't have to fill every slot), so its value
      // doesn't map directly to a position in `cards` (which only
      // contains played cards). Find the currently-selected card's actual
      // position among them via its aria-label instead -- that reflects
      // Field's own React state, so (unlike document.activeElement) it's
      // unaffected by the Fab momentarily taking DOM focus.
      const selectedCard = fieldContainer?.querySelector(
        '[aria-label="Selected field card"]'
      )
      const currentIdx = selectedCard
        ? cards.indexOf(selectedCard as HTMLElement)
        : -1

      if (currentIdx === -1) {
        return
      }

      const nextIdx = (currentIdx + direction + cards.length) % cards.length

      cards[nextIdx]?.focus()
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
        {isNarrowViewport && (
          <>
            <Fade in={showCardNavFabs} unmountOnExit>
              <Fab
                color="secondary"
                aria-label="Previous card"
                onPointerDown={handleCardNavFabPointerDown}
                onClick={() => handleCardNav(-1)}
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
                onClick={() => handleCardNav(1)}
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
        )}
        <Dialog open={showGameOver}>
          <DialogTitle>Game Over</DialogTitle>
          <DialogContent>
            Winner: <strong>{winner ? funAnimalName(winner) : 'No one'}</strong>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClickPlayAgain}>Play again</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </ShellContext.Provider>
  )
}

export const Match = ({ ...rest }: MatchProps) => {
  return (
    <ActorContext.Provider>
      <MatchCore {...rest} />
    </ActorContext.Provider>
  )
}
