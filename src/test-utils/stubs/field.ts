import { Factory } from '../../game/services/Factory/Factory'
import { IField } from '../../game/types'

export const stubField = (overrides: Partial<IField> = {}): IField => {
  return Factory.buildField({
    ...overrides,
  })
}
