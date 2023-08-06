import { CardType, Crop, Field } from '../index'

export const isCrop = (obj: unknown): obj is Crop => {
  if (typeof obj !== 'object' || obj === null) return false

  return (
    'id' in obj &&
    typeof obj.id === 'string' &&
    'type' in obj &&
    obj.type === CardType.CROP
  )
}

export const isField = (obj: unknown): obj is Field => {
  if (typeof obj !== 'object' || obj === null) return false

  return (
    'crops' in obj &&
    Array.isArray(obj.crops) &&
    obj.crops.every(crop => isCrop(crop) || crop === undefined)
  )
}
