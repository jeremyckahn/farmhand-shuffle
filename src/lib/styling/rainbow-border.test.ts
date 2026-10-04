import { describe, it, expect } from 'vitest'

import { createTheme } from '@mui/material/styles'

import { PIXEL_SIZE } from './pixel'
import { getRainbowBorderStyle, rotatingShadow } from './rainbow-border'

const theme = createTheme()

describe('rainbow-border', () => {
  it('returns style object', () => {
    const style = getRainbowBorderStyle({ theme, prefersReducedMotion: false })

    expect(style).toHaveProperty('position', 'relative')
    expect(style).toHaveProperty('&:before, &:after')
  })

  it('handles prefersReducedMotion', () => {
    const style = getRainbowBorderStyle({ theme, prefersReducedMotion: true })
    // Access nested properties to verify animation is undefined
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    const pseudoElements = (style as any)['&:before, &:after']

    expect(pseudoElements).toBeDefined()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(pseudoElements.animation).toBeUndefined()
  })

  it('includes animation when reduced motion is false', () => {
    const style = getRainbowBorderStyle({ theme, prefersReducedMotion: false })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    const pseudoElements = (style as any)['&:before, &:after']

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(pseudoElements.animation).toBeDefined()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(pseudoElements.animation).toContain(rotatingShadow.toString())
  })

  it('allows custom spread', () => {
    const spread = 5
    const style = getRainbowBorderStyle({
      theme,
      prefersReducedMotion: false,
      spread,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    const afterElement = (style as any)['&:after']

    // NOTE: The halo is drawn without any blur so it stays crisp pixel art,
    // and `spread` sets its width in art pixels beyond the inner ring.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(afterElement.filter).toBeUndefined()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(afterElement.top).toBe(`-${PIXEL_SIZE * (1 + spread)}px`)
  })
})
