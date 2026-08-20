import { describe, expect, it } from 'vitest'

import { Match } from './index'

describe('src/public/index', () => {
  it('exports Match as a function', () => {
    expect(typeof Match).toBe('function')
  })
})
