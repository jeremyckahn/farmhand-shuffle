import { FontFamily } from './styles/fonts'
import { darkTheme, lightTheme } from './theme'

describe('theme', () => {
  test.each([
    ['light', lightTheme],
    ['dark', darkTheme],
  ])('%s theme uses the pixel art styling', (_, theme) => {
    expect(theme.shape.borderRadius).toBe(0)
    expect(theme.typography.fontFamily).toContain(FontFamily.BODY)
    expect(theme.typography.h1.fontFamily).toContain(FontFamily.DISPLAY)
  })

  test('shadows are hard and unblurred, and grow with elevation', () => {
    expect(lightTheme.shadows[0]).toBe('none')

    // NOTE: Each shadow is "x y blur spread color"; the blur must be 0.
    const [lowX, , lowBlur] = lightTheme.shadows[1].split(' ')
    const [highX, , highBlur] = lightTheme.shadows[24].split(' ')

    expect(lowBlur).toBe('0')
    expect(highBlur).toBe('0')
    expect(parseInt(highX ?? '')).toBeGreaterThan(parseInt(lowX ?? ''))
  })
})
