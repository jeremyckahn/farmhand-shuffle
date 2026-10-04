import { createTheme } from '@mui/material/styles'

import {
  PIXEL_SIZE,
  pixelArtUrl,
  pixelFrameSx,
  pixelOutlineFilter,
  px,
  surfaceOutline,
} from './pixel'

const decodeSvg = (url: string) =>
  decodeURIComponent(
    url.replace(/^url\("data:image\/svg\+xml,/, '').slice(0, -2)
  )

describe('pixel', () => {
  test('px converts art pixels into CSS pixels', () => {
    expect(px(2)).toBe(`${2 * PIXEL_SIZE}px`)
  })

  describe('pixelArtUrl', () => {
    test('renders each non-transparent pixel as a rect', () => {
      const svg = decodeSvg(pixelArtUrl(['.A', 'B.'], { A: 'red', B: 'blue' }))

      expect(svg).toContain('viewBox="0 0 2 2"')
      expect(svg).toContain(
        '<rect x="1" y="0" width="1" height="1" fill="red"/>'
      )
      expect(svg).toContain(
        '<rect x="0" y="1" width="1" height="1" fill="blue"/>'
      )
      expect(svg.match(/<rect/g)).toHaveLength(2)
    })
  })

  describe('pixelFrameSx', () => {
    test('uses a 9-slice border image clipped to the padding box', () => {
      const sx = pixelFrameSx({ outline: 'red' })

      expect(sx.borderWidth).toBe(px(1))
      expect(sx.borderImageSlice).toBe('1')
      expect(sx.backgroundClip).toBe('padding-box')
      expect(decodeSvg(sx.borderImageSource)).toContain('fill="red"')
    })

    test('makes room for a drop shadow on the bottom and right', () => {
      const sx = pixelFrameSx({ outline: 'red', shadow: true })

      expect(sx.borderWidth).toBe(`${px(1)} ${px(2)} ${px(2)} ${px(1)}`)
      expect(sx.borderImageSlice).toBe('1 2 2 1')
    })

    test('keeps the shadow space but not the shadow when pressed', () => {
      const shadowed = pixelFrameSx({ outline: 'red', shadow: true })
      const pressed = pixelFrameSx({ outline: 'red', shadow: 'pressed' })

      expect(pressed.borderWidth).toBe(shadowed.borderWidth)
      expect(decodeSvg(pressed.borderImageSource)).toContain(
        'fill="transparent"'
      )
    })
  })

  describe('pixelOutlineFilter', () => {
    test('outlines all four sides without any blur', () => {
      const filter = pixelOutlineFilter('red')

      expect(filter.match(/drop-shadow/g)).toHaveLength(4)
      expect(filter).toContain(`drop-shadow(${px(1)} 0 0 red)`)
      expect(filter).toContain(`drop-shadow(0 -${px(1)} 0 red)`)
    })

    test('accepts a custom thickness', () => {
      expect(pixelOutlineFilter('red', '1px')).toContain(
        'drop-shadow(-1px 0 0 red)'
      )
    })
  })

  describe('surfaceOutline', () => {
    test('is black in dark mode', () => {
      const theme = createTheme({ palette: { mode: 'dark' } })

      expect(surfaceOutline(theme)).toBe(theme.palette.common.black)
    })

    test('is a dark shade of the background in light mode', () => {
      const theme = createTheme({
        palette: { mode: 'light', background: { default: '#cb8447' } },
      })

      expect(surfaceOutline(theme)).not.toBe(theme.palette.background.default)
    })
  })
})
