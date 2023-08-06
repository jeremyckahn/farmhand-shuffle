import { CardType, Crop, Field, Game, Player, Table } from '../index'

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

export const isPlayer = (obj: unknown): obj is Player => {
  if (typeof obj !== 'object' || obj === null) return false

  return (
    'id' in obj &&
    typeof obj.id === 'string' &&
    'funds' in obj &&
    typeof obj.funds === 'number' &&
    'deck' in obj &&
    Array.isArray(obj.deck) &&
    obj.deck.every(card => typeof card === 'string') &&
    'hand' in obj &&
    Array.isArray(obj.hand) &&
    obj.hand.every(card => typeof card === 'string') &&
    'discardPile' in obj &&
    Array.isArray(obj.discardPile) &&
    obj.discardPile.every(card => typeof card === 'string') &&
    'field' in obj &&
    isField(obj.field)
  )
}

export const isTable = (obj: unknown): obj is Table => {
  if (typeof obj !== 'object' || obj === null) return false

  return (
    'communityFund' in obj &&
    typeof obj.communityFund === 'number' &&
    'players' in obj &&
    typeof obj.players === 'object' &&
    obj.players !== null &&
    Object.values(obj.players).every(player => isPlayer(player))
  )
}

export const isGame = (obj: unknown): obj is Game => {
  if (typeof obj !== 'object' || obj === null) return false

  return 'table' in obj && isTable(obj.table)
}
