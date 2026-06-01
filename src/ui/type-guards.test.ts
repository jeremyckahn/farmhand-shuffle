import { describe, expect, it } from 'vitest'

import { isLocationStateWithNotification, isSxArray } from './type-guards'

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

  describe('isLocationStateWithNotification', () => {
    it('returns true for an object with a string notification', () => {
      expect(isLocationStateWithNotification({ notification: 'Hello' })).toBe(
        true
      )
    })

    it('returns false for an empty object', () => {
      expect(isLocationStateWithNotification({})).toBe(false)
    })

    it('returns false for an object with undefined notification', () => {
      expect(isLocationStateWithNotification({ notification: undefined })).toBe(
        false
      )
    })

    it('returns false for null', () => {
      expect(isLocationStateWithNotification(null)).toBe(false)
    })

    it('returns false for a non-object', () => {
      expect(isLocationStateWithNotification('string')).toBe(false)
      expect(isLocationStateWithNotification(123)).toBe(false)
      expect(isLocationStateWithNotification(true)).toBe(false)
      expect(isLocationStateWithNotification(undefined)).toBe(false)
    })

    it('returns false for an object with a non-string notification', () => {
      expect(isLocationStateWithNotification({ notification: 123 })).toBe(false)
      expect(isLocationStateWithNotification({ notification: {} })).toBe(false)
    })
  })
})
