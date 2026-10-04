import { PaletteMode } from '@mui/material'
import { darken, Theme } from '@mui/material/styles'
import createTheme from '@mui/material/styles/createTheme'
import { Shadows } from '@mui/material/styles/shadows'

import {
  elevationShadowLength,
  pixelBevel,
  pixelBevelPressed,
  pixelFrameSx,
  pixelPressedSx,
  pixelShadowColor,
  pixelSurfaceShadow,
  px,
  surfaceOutline,
} from '../lib/styling/pixel'

import { alertIconFontSize, alertIconMapping } from './components/PixelIcon'
import { FontFamily, fontFaces } from './styles/fonts'

// NOTE: Use https://zenoo.github.io/mui-theme-creator/ to help define theme
// values. See src/ui/README.md for how the pixel art styling works.

export const fonts = {
  display: `"${FontFamily.DISPLAY}", sans-serif`,
  body: `"${FontFamily.BODY}", sans-serif`,
} as const

const disabledOutline = 'rgba(0, 0, 0, 0.26)'

enum PaletteColorName {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  SUCCESS = 'success',
}

const isPaletteColorName = (color: unknown): color is PaletteColorName =>
  Object.values<unknown>(PaletteColorName).includes(color)

// Pixel art outlines read best when they're a deep shade of the fill color
// rather than a flat black.
const outlineFor = (theme: Theme, color: unknown) =>
  isPaletteColorName(color)
    ? darken(theme.palette[color].main, 0.5)
    : surfaceOutline(theme)

// Every elevation gets a hard, unblurred pixel art drop shadow rather than
// MUI's soft Material Design shadows. Higher elevations cast a longer
// shadow, up to four art pixels.
const shadows = [
  'none',
  ...Array.from({ length: 24 }, (_, index) => {
    const offset = px(elevationShadowLength(index + 1))

    return `${offset} ${offset} 0 0 ${pixelShadowColor}`
  }),
] as Shadows

// Shared by Button and Fab: a raised 9-slice frame. When pressed, it's pushed
// into its shadow, unless `moveWhenPressed` is false, in which case it stays
// in place and only its bevel inverts.
const raisedControlSx = (
  outline: string,
  { moveWhenPressed = true }: { moveWhenPressed?: boolean } = {}
) =>
  ({
    ...pixelFrameSx({ outline, shadow: true }),
    boxShadow: pixelBevel(),
    '&:hover': { boxShadow: pixelBevel() },
    '&.Mui-focusVisible': { boxShadow: pixelBevel() },
    '&:active': moveWhenPressed
      ? pixelPressedSx(outline)
      : { boxShadow: pixelBevelPressed },
    '&.Mui-disabled': {
      ...pixelFrameSx({ outline: disabledOutline, shadow: 'pressed' }),
      boxShadow: 'none',
    },
  } as const)

const createPixelTheme = (mode: PaletteMode) => {
  const baseTheme = createTheme({
    palette:
      mode === 'light'
        ? {
            mode,
            background: {
              paper: '#ffecb8',
              default: '#cb8447',
            },
          }
        : { mode },
    // Pixel art has no anti-aliased curves. Corners are notched by the
    // 9-slice frames instead.
    shape: { borderRadius: 0 },
    shadows,
    typography: {
      fontFamily: fonts.body,
      h1: { fontFamily: fonts.display },
      h2: { fontFamily: fonts.display },
      h3: { fontFamily: fonts.display },
      h4: { fontFamily: fonts.display },
      h5: { fontFamily: fonts.display },
      h6: { fontFamily: fonts.display },
      button: { fontFamily: fonts.display },
      overline: { fontFamily: fonts.display },
    },
  })

  return createTheme(baseTheme, {
    components: {
      MuiCssBaseline: {
        // NOTE: Each @font-face rule needs its own style object: emotion
        // collapses an array of them under a single '@font-face' key into
        // one rule.
        styleOverrides: () => [
          ...fontFaces.map(fontFace => ({ '@font-face': fontFace })),
          {
            body: {
              // The pixel fonts only ship the weights they're designed for.
              // Faux bold and italics smear their pixel grid, so don't let
              // the browser synthesize them.
              fontSynthesis: 'none',
            },
            img: { imageRendering: 'pixelated' },
          },
        ],
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            // Ripples and focus pulses are circular by default, which
            // clashes with the square pixel art controls.
            '& .MuiTouchRipple-root .MuiTouchRipple-child': {
              borderRadius: 0,
            },
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: ({
            ownerState,
            theme,
          }: {
            ownerState: { color?: unknown; variant?: string }
            theme: Theme
          }) => {
            const outline = outlineFor(theme, ownerState.color ?? 'primary')

            if (ownerState.variant === 'contained') {
              return raisedControlSx(outline)
            }

            if (ownerState.variant === 'outlined') {
              return {
                ...pixelFrameSx({ outline, shadow: true }),
                '&:hover': pixelFrameSx({ outline, shadow: true }),
                '&:active': {
                  ...pixelPressedSx(outline),
                  boxShadow: 'none',
                },
                '&.Mui-disabled': pixelFrameSx({
                  outline: disabledOutline,
                  shadow: 'pressed',
                }),
              }
            }

            // Text buttons get an invisible frame of the same size so they
            // line up with framed buttons next to them.
            return pixelFrameSx({ outline: 'transparent', shadow: 'pressed' })
          },
        },
      },
      MuiFab: {
        styleOverrides: {
          root: ({
            ownerState,
            theme,
          }: {
            ownerState: { color?: unknown }
            theme: Theme
          }) => ({
            // NOTE: Fabs float over the game (e.g. the card navigation and
            // hand toggle controls), so they stay in place when pressed
            // rather than shifting down into their shadow.
            ...raisedControlSx(outlineFor(theme, ownerState.color), {
              moveWhenPressed: false,
            }),
            // Fabs are normally round. Keep them square (with notched
            // corners) to match the rest of the pixel art UI.
            borderRadius: 0,
          }),
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: ({
            ownerState,
            theme,
          }: {
            ownerState: { elevation?: number; variant?: string }
            theme: Theme
          }) => {
            const elevation = ownerState.elevation ?? 1
            const hasShadow = ownerState.variant !== 'outlined' && elevation > 0

            return {
              ...pixelFrameSx({
                outline: surfaceOutline(theme),
                shadow: hasShadow,
              }),
              boxShadow: hasShadow
                ? pixelSurfaceShadow(elevation)
                : pixelBevel(),
            }
          },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            '&:before': { display: 'none' },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { borderRadius: 0 },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: ({ theme }: { theme: Theme }) => ({
            ...pixelFrameSx({ outline: theme.palette.common.black }),
            backgroundColor: 'rgba(60, 50, 40, 0.94)',
            boxShadow: pixelBevel({
              highlight: 'rgba(255, 255, 255, 0.15)',
              lowlight: 'rgba(0, 0, 0, 0.25)',
            }),
          }),
        },
      },
      MuiAlert: {
        defaultProps: { iconMapping: alertIconMapping },
        styleOverrides: {
          icon: { fontSize: alertIconFontSize },
          root: ({
            ownerState,
            theme,
          }: {
            ownerState: { severity?: unknown }
            theme: Theme
          }) =>
            pixelFrameSx({
              outline: outlineFor(theme, ownerState.severity ?? 'success'),
              shadow: true,
            }),
        },
      },
    },
  })
}

export const lightTheme = createPixelTheme('light')

export const darkTheme = createPixelTheme('dark')
