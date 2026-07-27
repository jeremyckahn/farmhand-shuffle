import { describe, expect, it } from 'vitest'

import { isSxArray } from './type-guards'

describe('type-guards', () => {
  describe('isSxArray', () => {
    it('returns true for an array', () => {
      expect(isSxArray([])).toBe(true)
    })

    it('returns false for a non-array object', () => {
      expect(isSxArray({})).toBe(false)
    })

    it('returns false for null', () => {
      expect(
        isSxArray(null as unknown as Parameters<typeof isSxArray>[0])
      ).toBe(false)
    })
  })
})
