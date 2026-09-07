import Box from '@mui/material/Box'
import Grid, { GridProps } from '@mui/material/Grid'
import useTheme from '@mui/material/styles/useTheme'
import { useContext, useLayoutEffect, useRef, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'

import { lookup } from '../../../game/services/Lookup'
import { IMatch } from '../../../game/types'
import { CARD_DIMENSIONS } from '../../config/dimensions'
import { useIsNarrowViewport } from '../../hooks/useIsNarrowViewport'
import { CardSize } from '../../types'
import { Deck } from '../Deck/Deck'
import { DiscardPile } from '../DiscardPile/DiscardPile'
import { Field } from '../Field/Field'
import { Hand } from '../Hand/Hand'
import { ShellContext } from '../Match/ShellContext'

export interface TableProps extends GridProps {
  match: IMatch
}

// NOTE: On large screens (CardSize.MEDIUM hand cards), the Hand is anchored
// this many spacing units below the viewport bottom, leaving most of the
// card peeking into view. That offset is tuned in absolute px against
// MEDIUM's height, so it's scaled by the ratio of the actual hand card
// size's height to MEDIUM's below -- otherwise a much shorter card (e.g.
// CardSize.COMPACT on narrow viewports) would have nearly all of it hidden
// below the fold instead of the same proportion peeking into view.
const handBottomOffsetSpacingUnitsAtMediumSize = -8

export const Table = ({ match, ...rest }: TableProps) => {
  const theme = useTheme()
  const { setSelectedFieldCardIdx } = useContext(ShellContext)
  const { sessionOwnerPlayerId: userPlayerId } = match
  const opponentPlayerIds = lookup.getOpponentPlayerIds(match)
  const useLargeCards = !useIsNarrowViewport()
  const handCardSize = useLargeCards ? CardSize.MEDIUM : CardSize.COMPACT
  // NOTE: Used by Field, Deck, and DiscardPile so all of a player's cards
  // shrink together on narrow viewports.
  const responsiveCardSize = useLargeCards ? CardSize.SMALL : CardSize.COMPACT
  const handBottomOffset = theme.spacing(
    handBottomOffsetSpacingUnitsAtMediumSize *
      (parseFloat(CARD_DIMENSIONS[handCardSize].height) /
        parseFloat(CARD_DIMENSIONS[CardSize.MEDIUM].height))
  )

  // NOTE: On mobile, the hand's idle (unselected) position is a special
  // case -- instead of mostly-hidden cards peeking up from the bottom edge
  // (the large-screen behavior above), the hand is fully visible and
  // vertically centered in the gap between the player's own Field and the
  // bottom of the screen. This only affects the idle position: a focused
  // card is positioned independently via useSelectedCardPosition, which
  // targets the true viewport center regardless of this offset.
  const gridContainerRef = useRef<HTMLDivElement>(null)
  const ownFieldContainerRef = useRef<HTMLDivElement>(null)
  const [ownFieldBottom, setOwnFieldBottom] = useState<number | null>(null)
  const { height: windowHeight } = useWindowSize({ debounceDelay: 1 })

  // NOTE: windowHeight/useLargeCards changing doesn't necessarily resize the
  // Grid container itself (e.g. a window resize that only changes height,
  // not width, may not affect the container's own box), so it isn't
  // guaranteed to be caught by the ResizeObserver below -- re-measure
  // directly whenever either changes.
  useLayoutEffect(() => {
    const ownFieldContainer = ownFieldContainerRef.current

    if (!ownFieldContainer) {
      return
    }

    setOwnFieldBottom(ownFieldContainer.getBoundingClientRect().bottom)
  }, [windowHeight, useLargeCards])

  // NOTE: This catches layout shifts the effect above misses -- e.g.
  // opponent field/deck/discard images finishing their async load, which
  // move the field's position without a window resize. Set up once (rather
  // than on every windowHeight tick) since the observer itself doesn't need
  // to change; the refs it reads are stable across renders. jsdom (the test
  // environment) doesn't implement ResizeObserver, so this is a no-op there
  // and the effect above (which does run in jsdom) is the only measurement.
  useLayoutEffect(() => {
    const gridContainer = gridContainerRef.current
    const ownFieldContainer = ownFieldContainerRef.current

    if (
      !gridContainer ||
      !ownFieldContainer ||
      typeof ResizeObserver === 'undefined'
    ) {
      return
    }

    const resizeObserver = new ResizeObserver(() => {
      setOwnFieldBottom(ownFieldContainer.getBoundingClientRect().bottom)
    })

    resizeObserver.observe(gridContainer)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  const handHeightPx = parseFloat(CARD_DIMENSIONS[handCardSize].height) * 16
  const mobileIdleHandBottomOffset =
    ownFieldBottom === null
      ? handBottomOffset
      : // NOTE: Clamped to 0 -- if the field's bottom edge is close to or
        // past the viewport's own bottom (a short viewport, or a tall
        // field), the unclamped midpoint goes negative and pushes the Hand
        // off-screen below the fold instead of just resting at the bottom.
        `${Math.max(0, (windowHeight - ownFieldBottom - handHeightPx) / 2)}px`
  const idleHandBottomOffset = useLargeCards
    ? handBottomOffset
    : mobileIdleHandBottomOffset

  return (
    <>
      <Grid
        gap={4}
        container
        {...rest}
        ref={gridContainerRef}
        data-testid={`table_${match.sessionOwnerPlayerId}`}
      >
        <Grid item xs={12}>
          {opponentPlayerIds.map(playerId => {
            return (
              <Field
                key={playerId}
                match={match}
                playerId={playerId}
                cardSize={responsiveCardSize}
              />
            )
          })}
        </Grid>
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignContent="center"
          >
            <Deck
              match={match}
              playerId={userPlayerId}
              cardSize={responsiveCardSize}
            />
            <DiscardPile
              match={match}
              playerId={userPlayerId}
              cardSize={responsiveCardSize}
            />
          </Box>
        </Grid>
        <Grid item xs={12} ref={ownFieldContainerRef}>
          <Field
            match={match}
            playerId={userPlayerId}
            cardSize={responsiveCardSize}
            onSelectedCardIdxChange={setSelectedFieldCardIdx}
          />
        </Grid>
      </Grid>
      <Box
        position="fixed"
        left="50%"
        right="50%"
        bottom={idleHandBottomOffset}
      >
        <Hand match={match} playerId={userPlayerId} cardSize={handCardSize} />
      </Box>
    </>
  )
}
