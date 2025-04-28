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

export const getRainbowBorderStyle = ({
  theme,
  prefersReducedMotion,
  spread = 24,
}: {
  theme: Theme
  prefersReducedMotion: boolean
  spread?: number
}): SystemStyleObject<Theme> => {
  return {
    position: 'relative',
    outlineColor: 'rgba(0, 0, 0, 0) !important',
    '&:before, &:after': {
      content: "''",
      position: 'absolute',
      top: '-2px',
      // NOTE: borderRadius is increased a bit to ensure the outline flows
      // smoothly with elements that have MUI rounded corners
      borderRadius: `${Math.floor(theme.shape.borderRadius * 1.5)}px`,
      left: '-2px',
      width: 'calc(100% + 4px)',
      height: 'calc(100% + 4px)',
      background:
        'linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000)',
      backgroundSize: '400%',
      zIndex: -1,
      animation: prefersReducedMotion
        ? undefined
        : `${rotatingShadow} 20s linear infinite`,
    },
    '&:after': {
      top: '-8px',
      left: '-8px',
      width: 'calc(100% + 16px)',
      height: 'calc(100% + 16px)',
      filter: `blur(${spread}px)`,
      opacity: '0.9',
    },
  }
}
