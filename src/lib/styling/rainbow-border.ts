import { Theme } from '@mui/material'
import { keyframes, SystemStyleObject } from '@mui/system'

import { PIXEL_SIZE } from './pixel'

// NOTE: Rainbow effect adapted from:
// https://codepen.io/fronthendrik/pen/RYOVzP?editors=1100

export const rotatingShadow = keyframes`
  0% {
    background-position: 0 0;
  }
  50.01% {
    background-position: 200% 0;
  }
  100% {
    background-position: 0 0;
  }
`

const rainbowColors = [
  '#fb0094',
  '#0000ff',
  '#00ff00',
  '#ffff00',
  '#ff0000',
  '#fb0094',
  '#0000ff',
  '#00ff00',
  '#ffff00',
  '#ff0000',
]

// NOTE: Each color gets a hard-edged band (rather than blending smoothly
// into the next) so the border reads as pixel art.
const steppedRainbowGradient = `linear-gradient(45deg, ${rainbowColors
  .map((color, idx) => {
    const bandSize = 100 / rainbowColors.length

    return `${color} ${idx * bandSize}% ${(idx + 1) * bandSize}%`
  })
  .join(', ')})`

/**
 * Returns styles that draw an animated, pixel art rainbow border around an
 * element: a solid ring hugging the element, plus a translucent halo
 * `spread` art pixels wide around that.
 */
export const getRainbowBorderStyle = ({
  theme,
  prefersReducedMotion,
  spread = 2,
}: {
  theme: Theme
  prefersReducedMotion: boolean
  spread?: number
}): SystemStyleObject<Theme> => {
  const ringOffset = PIXEL_SIZE
  const haloOffset = PIXEL_SIZE * (1 + spread)

  return {
    position: 'relative',
    outlineColor: 'rgba(0, 0, 0, 0) !important',
    '&:before, &:after': {
      content: "''",
      position: 'absolute',
      top: `-${ringOffset}px`,
      left: `-${ringOffset}px`,
      width: `calc(100% + ${ringOffset * 2}px)`,
      height: `calc(100% + ${ringOffset * 2}px)`,
      borderRadius: `${theme.shape.borderRadius}px`,
      background: steppedRainbowGradient,
      backgroundSize: '400%',
      zIndex: -1,
      animation: prefersReducedMotion
        ? undefined
        : `${rotatingShadow} 20s steps(40) infinite`,
    },
    '&:after': {
      top: `-${haloOffset}px`,
      left: `-${haloOffset}px`,
      width: `calc(100% + ${haloOffset * 2}px)`,
      height: `calc(100% + ${haloOffset * 2}px)`,
      opacity: '0.5',
    },
  }
}
