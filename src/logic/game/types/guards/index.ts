import { Field } from '../index'

export const isField = (obj: unknown): obj is Field => {
  if (typeof obj !== 'object' || obj === null) return false

  // FIXME: Verify that crops contains only Crop or undefined
  return 'crops' in obj && Array.isArray(obj['crops'])
}
