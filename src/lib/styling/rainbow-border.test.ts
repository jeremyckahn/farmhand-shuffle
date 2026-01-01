import { describe, it, expect } from 'vitest'
import { getRainbowBorderStyle, rotatingShadow } from './rainbow-border'
import { createTheme } from '@mui/material/styles'

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
        const pseudoElements = (style as any)['&:before, &:after']
        expect(pseudoElements).toBeDefined()
        expect(pseudoElements.animation).toBeUndefined()
    })

    it('includes animation when reduced motion is false', () => {
        const style = getRainbowBorderStyle({ theme, prefersReducedMotion: false })
        const pseudoElements = (style as any)['&:before, &:after']
        expect(pseudoElements.animation).toBeDefined()
        expect(pseudoElements.animation).toContain(rotatingShadow.toString())
    })

     it('allows custom spread', () => {
        const spread = 50
        const style = getRainbowBorderStyle({ theme, prefersReducedMotion: false, spread })
        const afterElement = (style as any)['&:after']
        expect(afterElement.filter).toBe(`blur(${spread}px)`)
    })
})
