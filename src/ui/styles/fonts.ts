// Pixel font faces from the Jersey family: Jersey 10 for headings and other
// UI labels, Jersey 20 for body text, and Jersey 25 (a heavier cut of the
// same design) as the body bold.
//
// The app refers to two families, "Farmhand Display" and "Farmhand Body"
// (see `fonts` in theme.ts), so the typefaces behind them can be swapped
// here without touching any components.
//
// These are declared here rather than by importing the @fontsource CSS so
// that each face can set `size-adjust`. Pixel fonts have much smaller glyphs
// per em than Roboto (the font they replaced), so without it every piece of
// text in the app would need its font-size tweaked. The adjustments below
// match each face's cap height to Roboto's.

import jersey10Latin from '@fontsource/jersey-10/files/jersey-10-latin-400-normal.woff2'
import jersey10LatinExt from '@fontsource/jersey-10/files/jersey-10-latin-ext-400-normal.woff2'
import jersey20Latin from '@fontsource/jersey-20/files/jersey-20-latin-400-normal.woff2'
import jersey20LatinExt from '@fontsource/jersey-20/files/jersey-20-latin-ext-400-normal.woff2'
import jersey25Latin from '@fontsource/jersey-25/files/jersey-25-latin-400-normal.woff2'
import jersey25LatinExt from '@fontsource/jersey-25/files/jersey-25-latin-ext-400-normal.woff2'

export enum FontFamily {
  DISPLAY = 'Farmhand Display',
  BODY = 'Farmhand Body',
}

// Copied from the @fontsource CSS.
const unicodeRanges = {
  latin:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  latinExt:
    'U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF',
}

const fontFace = (
  family: FontFamily,
  weight: number,
  sizeAdjust: string,
  url: string,
  unicodeRange: string
) => ({
  // Quoted because unquoted family names can't contain a word that starts
  // with a digit.
  fontFamily: `"${family}"`,
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: weight,
  sizeAdjust,
  src: `url("${url}") format('woff2')`,
  unicodeRange,
})

const DISPLAY_SIZE_ADJUST = '133%'
const BODY_SIZE_ADJUST = '122%'
const BODY_BOLD_SIZE_ADJUST = '118%'

export const fontFaces = [
  fontFace(
    FontFamily.DISPLAY,
    400,
    DISPLAY_SIZE_ADJUST,
    jersey10Latin,
    unicodeRanges.latin
  ),
  fontFace(
    FontFamily.DISPLAY,
    400,
    DISPLAY_SIZE_ADJUST,
    jersey10LatinExt,
    unicodeRanges.latinExt
  ),
  fontFace(
    FontFamily.BODY,
    400,
    BODY_SIZE_ADJUST,
    jersey20Latin,
    unicodeRanges.latin
  ),
  fontFace(
    FontFamily.BODY,
    400,
    BODY_SIZE_ADJUST,
    jersey20LatinExt,
    unicodeRanges.latinExt
  ),
  fontFace(
    FontFamily.BODY,
    700,
    BODY_BOLD_SIZE_ADJUST,
    jersey25Latin,
    unicodeRanges.latin
  ),
  fontFace(
    FontFamily.BODY,
    700,
    BODY_BOLD_SIZE_ADJUST,
    jersey25LatinExt,
    unicodeRanges.latinExt
  ),
]
