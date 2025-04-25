import {
  CardInstance,
  CardType,
  GameState,
  ICard,
  ICrop,
  ICropPriceFluctuation,
  IField,
  IGame,
  IPlayedCrop,
  IPlayer,
  ITable,
} from '../'
import * as cards from '../../cards'
import { GameStateCorruptError } from '../../services/Rules/errors'

export const isCardInstance = (obj: unknown): obj is CardInstance => {
  if (typeof obj !== 'object' || obj === null) return false

  return (
    'id' in obj &&
    typeof obj.id === 'string' &&
    'type' in obj &&
    typeof obj.type === 'string' &&
    obj.type in CardType &&
    'instanceId' in obj &&
    typeof obj.instanceId === 'string'
  )
}

export const isCrop = (obj: unknown): obj is ICrop => {
  if (typeof obj !== 'object' || obj === null) return false

  return (
    'id' in obj &&
    typeof obj.id === 'string' &&
    'type' in obj &&
    obj.type === CardType.CROP
  )
}

export const isPlayedCrop = (obj: unknown): obj is IPlayedCrop => {
  if (!obj || typeof obj !== 'object') {
    return false
  }

  const o = obj

  return (
    'instance' in o &&
    typeof o.instance === 'object' &&
    o.instance !== null &&
    'waterCards' in o &&
    typeof o.waterCards === 'number' &&
    'wasWateredTuringTurn' in o &&
    typeof o.wasWateredTuringTurn === 'boolean'
  )
}

export const isField = (obj: unknown): obj is IField => {
  if (typeof obj !== 'object' || obj === null) return false

  return (
    'crops' in obj &&
    Array.isArray(obj.crops) &&
    obj.crops.every(crop => isPlayedCrop(crop) || crop === undefined)
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
    obj.deck.every(isCardInstance) &&
    'hand' in obj &&
    Array.isArray(obj.hand) &&
    obj.hand.every(isCardInstance) &&
    'discardPile' in obj &&
    Array.isArray(obj.discardPile) &&
    obj.discardPile.every(isCardInstance) &&
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

export const isCropPriceFluctuation = (
  obj: unknown
): obj is ICropPriceFluctuation => {
  if (typeof obj !== 'object' || obj === null) return false

  return (
    'crop' in obj &&
    isCrop(obj.crop) &&
    'multiplier' in obj &&
    typeof obj.multiplier === 'number'
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
    typeof obj.sessionOwnerPlayerId === 'string' &&
    'buffedCrop' in obj &&
    (obj.buffedCrop === null || isCropPriceFluctuation(obj.buffedCrop)) &&
    'nerfedCrop' in obj &&
    (obj.nerfedCrop === null || isCropPriceFluctuation(obj.nerfedCrop))
  )
}

export const isCardId = (id: string): id is keyof typeof cards => id in cards

export const isCard = (obj: unknown): obj is ICard => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    typeof obj.id === 'string' &&
    isCardId(obj.id) &&
    'name' in obj &&
    typeof obj.name === 'string' &&
    'type' in obj &&
    typeof obj.type === 'string' &&
    obj.type in CardType &&
    'onPlayFromHand' in obj &&
    typeof obj.onPlayFromHand === 'function'
  )
}

export function assertIsCardId(id: string): asserts id is keyof typeof cards {
  if (!isCardId(id)) {
    throw new GameStateCorruptError(`${id} is not a valid card ID`)
  }
}

export function assertCurrentPlayer(
  currentPlayerId: string | null
): asserts currentPlayerId is string {
  if (currentPlayerId === null) {
    throw new TypeError('currentPlayerId must not be null')
  }
}

export function assertStringIsGameState(str: string): asserts str is GameState {
  if (!(str in GameState)) {
    throw new TypeError(`${str} is not a GameState`)
  }
}

export function assertIsPlayedCrop(
  plotContents: IField['crops'][0],
  fieldCropIdx: number
): asserts plotContents is IPlayedCrop {
  if (plotContents === undefined) {
    throw new TypeError(`Field plot at position ${fieldCropIdx} is undefined`)
  }
}
