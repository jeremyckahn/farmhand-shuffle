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

// Blur radius (px) of the glows drawn around crop cards (watering/harvest
// indicators). A drop-shadow's visible reach is about twice its blur radius,
// so this is scaled to the card: a fixed 24px glow dwarfs a 48px-wide compact
// card and spills well past the padding Match's scroll container reserves
// for it (see MatchProps / contentPaddingVar), where it gets clipped.
export const CARD_GLOW_BLUR_PX = {
  [CardSize.COMPACT]: 8,
  [CardSize.SMALL]: 12,
  [CardSize.MEDIUM]: 24,
  [CardSize.LARGE]: 24,
} as const
