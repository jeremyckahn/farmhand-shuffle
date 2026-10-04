import { describe, expect, it } from 'vitest'

import { darkTheme, lightTheme, Match } from './index'

describe('src/public/index', () => {
  it('exports Match as a function', () => {
    expect(typeof Match).toBe('function')
  })

  it('exports the pixel art themes', () => {
    expect(lightTheme.palette.mode).toBe('light')
    expect(darkTheme.palette.mode).toBe('dark')
    expect(lightTheme.shape.borderRadius).toBe(0)
  })
})
