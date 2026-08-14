import { StateValue } from 'xstate'

import {
  BotTurnActionState,
  CardInstance,
  EventInstance,
  IField,
  IPlayedCrop,
  isEventCardInstance,
  isToolCardInstance,
  MatchState,
  ToolInstance,
} from '..'
import * as cards from '../../cards'
import { MatchStateCorruptError } from '../../services/Rules/errors'
import { isCardId, isPlayedCrop, isStateValueStateValueMap } from '../guards'

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
  plotContents: IField['cards'][0]
): asserts plotContents is IPlayedCrop {
  if (!isPlayedCrop(plotContents)) {
    throw new TypeError(`${JSON.stringify(plotContents)} is not IPlayedCrop`)
  }
}
