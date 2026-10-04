// Retro pixel art UI chrome built on CSS 9-slice scaling (`border-image`).
//
// Each frame is a tiny SVG "sprite" (a few pixels square) that the browser
// slices into corners, edges and a center. Corners are drawn at a fixed
// size and edges stretch, so a frame scales to any element size while every
// art pixel stays exactly PIXEL_SIZE CSS pixels. Because the sprites are
// generated as SVGs, their colors can be derived from the MUI palette at
// runtime instead of needing a hand-drawn PNG per color.
//
// Only the outline, the notched corners and the hard drop shadow live in
// the 9-slice image. The element's background is clipped to its padding box
// so it fills the frame's interior, and the bevel highlight is drawn with
// inset box-shadows. That keeps `backgroundColor` overrides (hover states,
// selected cards, palette colors, etc.) working without regenerating any
// images.
//
// See src/ui/README.md for how this fits into the rest of the theme.

import { darken, Theme } from '@mui/material/styles'

/**
 * The size, in CSS pixels, of one "art pixel" in the UI chrome.
 */
export const PIXEL_SIZE = 3

/**
 * Converts a number of art pixels into a CSS length.
 */
export const px = (units: number) => `${units * PIXEL_SIZE}px`

/**
 * Converts a pixel map into a CSS `url()` for an SVG data URI. Each string in
 * `rows` is one row of pixels, and each character is a key of `palette`. A
 * `.` is a transparent pixel.
 */
export const pixelArtUrl = (
  rows: readonly string[],
  palette: Record<string, string>
): string => {
  const height = rows.length
  const width = rows[0]?.length ?? 0

  const rects = rows
    .flatMap((row, y) =>
      [...row].map((char, x) => {
        const fill = palette[char]

        return char === '.' || !fill
          ? ''
          : `<rect x="${x}" y="${y}" width="1" height="1" fill="${fill}"/>`
      })
    )
    .join('')

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" shape-rendering="crispEdges">${rects}</svg>`

  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

// O = outline, D = drop shadow
//
// A 1px notch in each corner gives the classic pixel art "rounded" box. The
// center pixel is left transparent; the element's own background shows
// through it.
const FRAME = ['.O.', 'O.O', '.O.']
const FRAME_SLICE = '1'
const FRAME_WIDTH = px(1)

// Same as FRAME, plus a hard drop shadow offset by one art pixel to the
// bottom right. The right and bottom slices are two pixels wide to hold the
// shadow.
const SHADOWED_FRAME = ['.O..', 'O.OD', '.ODD', '.DD.']
const SHADOWED_FRAME_SLICE = '1 2 2 1'

/**
 * The border widths of a frame drawn with `shadow: true` (or `'pressed'`).
 * Useful for positioning decorations, such as glows, outside the frame.
 */
export const shadowedFrameWidths = {
  top: px(1),
  right: px(2),
  bottom: px(2),
  left: px(1),
} as const

const SHADOWED_FRAME_WIDTH = [
  shadowedFrameWidths.top,
  shadowedFrameWidths.right,
  shadowedFrameWidths.bottom,
  shadowedFrameWidths.left,
].join(' ')

export const pixelShadowColor = 'rgba(0, 0, 0, 0.3)'

/**
 * The outline color for framed surfaces (cards, panels, dialogs, etc.).
 */
export const surfaceOutline = (theme: Theme) =>
  theme.palette.mode === 'light'
    ? darken(theme.palette.background.default, 0.5)
    : theme.palette.common.black

/**
 * A hard (unblurred) drop shadow offset by one art pixel, for use as a
 * `box-shadow` on rectangular elements.
 */
export const pixelBoxShadow = `${px(1)} ${px(1)} 0 0 ${pixelShadowColor}`

/**
 * The length, in art pixels, of the hard drop shadow for an MUI elevation:
 * one art pixel for every four levels of elevation, up to four.
 */
export const elevationShadowLength = (elevation: number) =>
  Math.min(4, Math.ceil(elevation / 4))

/**
 * Returns the `box-shadow` for a surface framed with `shadow: true`: the
 * bevel, plus a longer drop shadow for higher elevations.
 *
 * The frame's sprite already draws the first art pixel of the drop shadow
 * inside its border, so only the rest is drawn here, as a hard box-shadow
 * cast from the outside of the border. The two meet in a stepped, pixel art
 * shadow.
 */
export const pixelSurfaceShadow = (elevation: number) => {
  const extraLength = elevationShadowLength(elevation) - 1

  return extraLength > 0
    ? `${pixelBevel()}, ${px(extraLength)} ${px(
        extraLength
      )} 0 0 ${pixelShadowColor}`
    : pixelBevel()
}

export interface PixelFrameOptions {
  /**
   * The outline color.
   */
  outline: string
  /**
   * Whether to render a hard drop shadow. When this is `'pressed'`, space
   * for the shadow is preserved (so the element's size doesn't change) but
   * the shadow itself is not drawn. Pair that with `pixelPressedSx`.
   */
  shadow?: boolean | 'pressed'
}

/**
 * Returns sx styles that render a scalable 9-slice pixel art frame around an
 * element.
 *
 * NOTE: Override the framed element's color with `backgroundColor`, not the
 * `background` shorthand. The shorthand resets `backgroundClip`, which paints
 * the color under the frame's transparent corners and drop shadow.
 */
export const pixelFrameSx = ({
  outline,
  shadow = false,
}: PixelFrameOptions) => {
  const rows = shadow ? SHADOWED_FRAME : FRAME
  const slice = shadow ? SHADOWED_FRAME_SLICE : FRAME_SLICE
  const width = shadow ? SHADOWED_FRAME_WIDTH : FRAME_WIDTH
  const image = pixelArtUrl(rows, {
    O: outline,
    D: shadow === true ? pixelShadowColor : 'transparent',
  })

  return {
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderWidth: width,
    borderRadius: 0,
    borderImageSource: image,
    borderImageSlice: slice,
    borderImageWidth: width,
    borderImageRepeat: 'stretch',
    // Keep the background inside the outline so the notched corners and the
    // drop shadow stay transparent.
    backgroundClip: 'padding-box',
  } as const
}

/**
 * Returns a `box-shadow` value that draws a one-art-pixel bevel inside an
 * element: a light edge on the top and left, and a dark edge on the bottom
 * and right.
 */
export const pixelBevel = ({
  highlight = 'rgba(255, 255, 255, 0.45)',
  lowlight = 'rgba(0, 0, 0, 0.12)',
}: { highlight?: string; lowlight?: string } = {}) =>
  `inset ${px(1)} ${px(1)} 0 ${highlight}, inset -${px(1)} -${px(
    1
  )} 0 ${lowlight}`

/**
 * Inverted bevel for pressed/active controls.
 */
export const pixelBevelPressed = pixelBevel({
  highlight: 'rgba(0, 0, 0, 0.15)',
  lowlight: 'rgba(255, 255, 255, 0.25)',
})

/**
 * Styles for the pressed state of a control framed with `shadow: true`. The
 * control shifts into the space its shadow occupied, so it appears to be
 * pushed down.
 */
export const pixelPressedSx = (outline: string) => ({
  ...pixelFrameSx({ outline, shadow: 'pressed' }),
  transform: `translate(${px(1)}, ${px(1)})`,
  boxShadow: pixelBevelPressed,
})
