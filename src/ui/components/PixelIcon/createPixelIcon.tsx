import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import React from 'react'

import { PixelMap } from './types'

const SHADE_OPACITY = 0.45

/**
 * Builds an SVG path that covers every pixel in `rows` that matches `char`.
 * Horizontal runs of matching pixels are merged into a single rectangle to
 * keep the path short.
 */
interface PixelRun {
  start: number
  length: number
}

/**
 * Finds the horizontal runs of `char` in a row of a pixel map.
 */
const runsIn = (row: string, char: string) =>
  [...row].reduce<PixelRun[]>((runs, pixel, x) => {
    if (pixel !== char) return runs

    const lastRun = runs[runs.length - 1]

    return lastRun && lastRun.start + lastRun.length === x
      ? [
          ...runs.slice(0, -1),
          { start: lastRun.start, length: lastRun.length + 1 },
        ]
      : [...runs, { start: x, length: 1 }]
  }, [])

const pixelPath = (rows: PixelMap, char: string) =>
  rows
    .flatMap((row, y) =>
      runsIn(row, char).map(
        ({ start, length }) => `M${start} ${y}h${length}v1h-${length}z`
      )
    )
    .join('')

/**
 * Mirrors a pixel map horizontally.
 */
export const flipX = (rows: PixelMap): PixelMap =>
  rows.map(row => [...row].reverse().join(''))

/**
 * Mirrors a pixel map vertically.
 */
export const flipY = (rows: PixelMap): PixelMap => [...rows].reverse()

/**
 * Rotates a square pixel map 90 degrees clockwise.
 */
export const rotate = (rows: PixelMap): PixelMap =>
  [...(rows[0] ?? '')].map((_, x) =>
    rows
      .map(row => row[x] ?? '')
      .reverse()
      .join('')
  )

/**
 * Creates an MUI SvgIcon component from a pixel map. The result is a drop-in
 * replacement for an @mui/icons-material icon: it takes the same props,
 * forwards refs to the underlying <svg> (which a Tooltip needs to position
 * itself when the icon is its direct child), is colored with `currentColor`,
 * and has a `data-testid` of `${name}Icon`.
 */
export const createPixelIcon = (rows: PixelMap, name: string) => {
  const width = rows[0]?.length ?? 0
  const height = rows.length
  const solid = pixelPath(rows, '#')
  const shade = pixelPath(rows, '+')

  return React.forwardRef<SVGSVGElement, SvgIconProps>(function PixelIcon(
    props,
    ref
  ) {
    return (
      <SvgIcon
        ref={ref}
        data-testid={`${name}Icon`}
        viewBox={`0 0 ${width} ${height}`}
        shapeRendering="crispEdges"
        {...props}
      >
        {shade && <path d={shade} opacity={SHADE_OPACITY} />}
        <path d={solid} />
      </SvgIcon>
    )
  })
}
