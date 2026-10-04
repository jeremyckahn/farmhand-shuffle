import { Theme } from '@mui/material'
import { keyframes, SystemStyleObject } from '@mui/system'

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

export interface BorderWidths {
  top: string
  right: string
  bottom: string
  left: string
}

const noBorder: BorderWidths = {
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
}

// Positions an absolutely positioned layer `distance` outside the element's
// border box. Absolute offsets are measured from the padding box, so the
// border widths are added in.
const outsetFromBorderBox = (
  { top, right, bottom, left }: BorderWidths,
  distance: string
) => ({
  top: `calc(-${distance} - ${top})`,
  left: `calc(-${distance} - ${left})`,
  width: `calc(100% + 2 * ${distance} + ${left} + ${right})`,
  height: `calc(100% + 2 * ${distance} + ${top} + ${bottom})`,
})

export const getRainbowBorderStyle = ({
  theme,
  prefersReducedMotion,
  spread = 24,
  borderWidths = noBorder,
}: {
  theme: Theme
  prefersReducedMotion: boolean
  spread?: number
  /**
   * The element's border widths, so the rainbow is drawn outside of its
   * border (such as a pixel art frame) rather than hidden behind it.
   */
  borderWidths?: BorderWidths
}): SystemStyleObject<Theme> => {
  return {
    position: 'relative',
    outlineColor: 'rgba(0, 0, 0, 0) !important',
    '&:before, &:after': {
      content: "''",
      position: 'absolute',
      ...outsetFromBorderBox(borderWidths, '2px'),
      // NOTE: borderRadius is increased a bit to ensure the outline flows
      // smoothly with elements that have MUI rounded corners
      borderRadius: `${Math.floor(theme.shape.borderRadius * 1.5)}px`,
      background:
        'linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000)',
      backgroundSize: '400%',
      zIndex: -1,
      animation: prefersReducedMotion
        ? undefined
        : `${rotatingShadow} 20s linear infinite`,
    },
    '&:after': {
      ...outsetFromBorderBox(borderWidths, '8px'),
      filter: `blur(${spread}px)`,
      opacity: '0.9',
    },
  }
}
