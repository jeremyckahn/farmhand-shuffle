import { IField } from '../../game/types'

export const stubField = (overrides: Partial<IField> = {}): IField => {
  return {
    crops: [],
    ...overrides,
  }
}
