import { StateValue, StateValueMap } from 'xstate'

import {
  CardInstance,
  CardType,
  EventInstance,
  MatchState,
  ICard,
  ICrop,
  ICropPriceFluctuation,
  IField,
  IMatch,
  IPlayedCrop,
  IPlayer,
  isEventCardInstance,
  isToolCardInstance,
  ITable,
  ToolInstance,
  CropInstance,
  IPlayedTool,
  IPlayedCard,
  BotTurnActionState,
} from '../'
import * as cards from '../../cards'
import { MatchStateCorruptError } from '../../services/Rules/errors'

export const isNonNullObject = (
  value: unknown
): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null

export const isCardInstance = (obj: unknown): obj is CardInstance => {
  if (!isNonNullObject(obj)) return false

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
  if (!isNonNullObject(obj)) return false

  return (
    'id' in obj &&
    typeof obj.id === 'string' &&
    'type' in obj &&
    obj.type === CardType.CROP
  )
}

export const isCropCardInstance = (
  cardInstance: CardInstance
): cardInstance is CropInstance => {
  return cardInstance.type === CardType.CROP
}

export const isPlantableCardInstance = (
  cardInstance: CardInstance
): cardInstance is CropInstance | ToolInstance => {
  if (cardInstance.type === CardType.TOOL && cardInstance.isPlantable) {
    return true
  }

  return isCropCardInstance(cardInstance)
}

export const isPlayedCrop = (obj: unknown): obj is IPlayedCrop => {
  if (!isNonNullObject(obj)) {
    return false
  }

  const o = obj

  return (
    'instance' in o &&
    isCardInstance(o.instance) &&
    isCropCardInstance(o.instance) &&
    'waterCards' in o &&
    typeof o.waterCards === 'number' &&
    'wasWateredDuringTurn' in o &&
    typeof o.wasWateredDuringTurn === 'boolean'
  )
}

export const isPlayedTool = (obj: unknown): obj is IPlayedTool => {
  if (!isNonNullObject(obj)) {
    return false
  }

  const o = obj

  return (
    'instance' in o &&
    isCardInstance(o.instance) &&
    isToolCardInstance(o.instance)
  )
}

export const isPlayedCard = (obj: unknown): obj is IPlayedCard => {
  return isPlayedCrop(obj) || isPlayedTool(obj)
}

export const isField = (obj: unknown): obj is IField => {
  if (!isNonNullObject(obj)) return false

  return (
    'cards' in obj &&
    Array.isArray(obj.cards) &&
    obj.cards.every(crop => isPlayedCrop(crop) || crop === undefined)
  )
}

export const isPlayer = (obj: unknown): obj is IPlayer => {
  if (!isNonNullObject(obj)) return false

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
    'cardsPlayedDuringTurn' in obj &&
    Array.isArray(obj.cardsPlayedDuringTurn) &&
    obj.cardsPlayedDuringTurn.every(isCardInstance) &&
    'field' in obj &&
    isField(obj.field)
  )
}

export const isTable = (obj: unknown): obj is ITable => {
  if (!isNonNullObject(obj)) return false

  return (
    'communityFund' in obj &&
    typeof obj.communityFund === 'number' &&
    'players' in obj &&
    isNonNullObject(obj.players) &&
    Object.values(obj.players).every(player => isPlayer(player))
  )
}

export const isCropPriceFluctuation = (
  obj: unknown
): obj is ICropPriceFluctuation => {
  if (!isNonNullObject(obj)) return false

  return (
    'crop' in obj &&
    isCrop(obj.crop) &&
    'multiplier' in obj &&
    typeof obj.multiplier === 'number'
  )
}

export const isMatch = (obj: unknown): obj is IMatch => {
  if (!isNonNullObject(obj)) return false

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
    (obj.nerfedCrop === null || isCropPriceFluctuation(obj.nerfedCrop)) &&
    'cardsToDrawAtTurnStart' in obj &&
    typeof obj.cardsToDrawAtTurnStart === 'number' &&
    'eventCardsThatCanBePlayed' in obj &&
    typeof obj.eventCardsThatCanBePlayed === 'number' &&
    'selectedWaterCardInHandIdx' in obj &&
    typeof obj.selectedWaterCardInHandIdx === 'number' &&
    'winner' in obj &&
    (typeof obj.winner === 'string' || obj.winner === null)
  )
}

export const isCardId = (id: string): id is keyof typeof cards => id in cards

export const isCard = (obj: unknown): obj is ICard => {
  return (
    isNonNullObject(obj) &&
    'id' in obj &&
    typeof obj.id === 'string' &&
    isCardId(obj.id) &&
    'name' in obj &&
    typeof obj.name === 'string' &&
    'type' in obj &&
    typeof obj.type === 'string' &&
    obj.type in CardType
  )
}

export const isStateValueStateValueMap = (
  stateValue: StateValue
): stateValue is StateValueMap => {
  return isNonNullObject(stateValue)
}

// TODO: Move assertions to their own file

export function assertIsNonNullable<T>(
  obj: T,
  message = `${String(obj)} is null or undefined`
): asserts obj is NonNullable<T> {
  if (obj === undefined || obj === null) {
    throw new TypeError(message)
  }
}

export function assertIsCardId(id: string): asserts id is keyof typeof cards {
  if (!isCardId(id)) {
    throw new MatchStateCorruptError(`${id} is not a valid card ID`)
  }
}

export function assertIsToolCardId(
  id: string
): asserts id is keyof typeof cards.toolCards {
  if (!(id in cards.toolCards)) {
    throw new MatchStateCorruptError(`${id} is not a valid tool card ID`)
  }
}

export function assertIsEventCardInstance(
  card: CardInstance
): asserts card is EventInstance {
  if (!isEventCardInstance(card)) {
    throw new MatchStateCorruptError(`${card.id} is not an event card`)
  }
}

export function assertIsToolCardInstance(
  card: CardInstance
): asserts card is ToolInstance {
  if (!isToolCardInstance(card)) {
    throw new MatchStateCorruptError(`${card.id} is not a tool card`)
  }
}

export function assertStringIsMatchState(
  str: string
): asserts str is MatchState {
  if (!(str in MatchState)) {
    throw new TypeError(`${str} is not a MatchState`)
  }
}

export function assertStateValueIsBotTurnActionState(
  stateValue: StateValue
): asserts stateValue is BotTurnActionState {
  if (isStateValueStateValueMap(stateValue)) {
    throw new TypeError(`stateValue is not a string`)
  }

  if (!(stateValue in BotTurnActionState)) {
    throw new TypeError(`${stateValue} is not a BotTurnActionState`)
  }
}

export function assertIsPlayedCrop(
  plotContents: IField['cards'][0],
  fieldCropIdx: number
): asserts plotContents is IPlayedCrop {
  if (plotContents === undefined) {
    throw new TypeError(`Field plot at position ${fieldCropIdx} is undefined`)
  }
}
