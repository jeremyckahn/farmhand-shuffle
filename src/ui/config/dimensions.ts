import { CardSize } from '../types'

export const CARD_HEIGHT = '28rem'

export const CARD_DIMENSIONS = {
  [CardSize.COMPACT]: {
    height: '4.5rem',
    width: '3rem',
  },
  [CardSize.SMALL]: {
    height: '14rem',
    width: '8rem',
  },
  [CardSize.MEDIUM]: {
    height: '21rem',
    width: '12rem',
  },
  [CardSize.LARGE]: {
    height: '28rem',
    width: '16rem',
  },
}

const DEFAULT_FIELD_ZOOM_SCALE = 1.25

/**
 * The Field's tap-to-zoom interaction (see Field.tsx's handleCardFocus)
 * scales the focused card up from wherever it's actually rendered. A fixed
 * 1.25x is legible for SMALL/MEDIUM/LARGE cards, but far too little at
 * COMPACT size (1.25 * 48px =~ 60px) to read anything. Scale COMPACT cards
 * up to roughly SMALL's rendered width instead.
 */
export const getFieldZoomScale = (size: CardSize) =>
  size === CardSize.COMPACT
    ? parseFloat(CARD_DIMENSIONS[CardSize.SMALL].width) /
      parseFloat(CARD_DIMENSIONS[CardSize.COMPACT].width)
    : DEFAULT_FIELD_ZOOM_SCALE
