import * as cards from '../../cards'
import { CardType, ICrop, IField, IGame, IPlayer, ITable } from '../'
import { GameStateCorruptError } from '../../services/Rules/errors'

export const isCrop = (obj: unknown): obj is ICrop => {
  if (typeof obj !== 'object' || obj === null) return false

  return (
    'id' in obj &&
    typeof obj.id === 'string' &&
    'type' in obj &&
    obj.type === CardType.CROP
  )
}

export const isField = (obj: unknown): obj is IField => {
  if (typeof obj !== 'object' || obj === null) return false

  return (
    'crops' in obj &&
    Array.isArray(obj.crops) &&
    obj.crops.every(crop => isCrop(crop) || crop === undefined)
  )
}

export const isPlayer = (obj: unknown): obj is IPlayer => {
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

export const isTable = (obj: unknown): obj is ITable => {
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

export const isGame = (obj: unknown): obj is IGame => {
  if (typeof obj !== 'object' || obj === null) return false

  return (
    'table' in obj &&
    isTable(obj.table) &&
    'currentPlayerId' in obj &&
    (typeof obj.currentPlayerId === 'string' || obj.currentPlayerId === null) &&
    'sessionOwnerPlayerId' in obj &&
    typeof obj.sessionOwnerPlayerId === 'string'
  )
}

export const isCardId = (id: string): id is keyof typeof cards => id in cards

export function assertIsCardId(id: string): asserts id is keyof typeof cards {
  if (!isCardId(id)) {
    throw new GameStateCorruptError(`${id} is not a valid card ID`)
  }
}

// TODO: Use this everywhere instead of doing the check directly
export function assertCurrentPlayer(
  currentPlayerId: string | null
): asserts currentPlayerId is string {
  if (currentPlayerId === null) {
    throw new TypeError('[TypeError] currentPlayerId must not be null')
  }
}
